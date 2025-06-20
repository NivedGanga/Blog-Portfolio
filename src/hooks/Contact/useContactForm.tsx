import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import { useContact } from './useContact'

export interface ContactModal {
    name: string,
    company: string,
    email: string,
    phone: number | undefined,
    message: string
}
const initialValues: ContactModal = {
    company: '',
    email: '',
    message: '',
    name: '',
    phone: undefined
}
export const useContactForm = () => {
    const { submitContactForm } = useContact()

    const formSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        company: Yup.string(),
        email: Yup.string().email().required(),
        phone: Yup.number().required().min(10),
        message: Yup.string().required()
    })

    const formik = useFormik({
        validationSchema: formSchema,
        initialValues,
        onSubmit: (values) => {
            const formData: ContactModal = {
                ...values
            }
            submitContactForm(formData)
                .then(() => {
                    console.log("values submitted")
                    formik.resetForm()
                    formik.setTouched({})
                })
        }
    })

    return {
        formik
    }
}