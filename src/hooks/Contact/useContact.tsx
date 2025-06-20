import { useDispatch } from "react-redux"
import { emailSerices } from "../../services/email_service"
import type { ContactModal } from "./useContactForm"
import { setError, setLoading, setSuccess } from "../../redux/slices/contactSlice"

export const useContact = () => {
    const { sendMail } = emailSerices()
    const dispatch = useDispatch()
    const submitContactForm = async (formData: ContactModal) => {
        dispatch(setLoading(true))
        await sendMail(formData)
            .then(() => {
                dispatch(setSuccess('success'))
            })
            .catch((error) => {

                dispatch(setError(error))
            })
        dispatch(setLoading(false))
    }
    return {
        submitContactForm
    }
}