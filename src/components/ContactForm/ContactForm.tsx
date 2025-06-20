import React from 'react'
import ContactTextField from '../ContactTextField/ContactTextField'
import PortfolioButton from '../Buttons/PortfolioButton'
import { emailSerices } from '../../services/email_service'
import { useContact } from '../../hooks/Contact/useContact'
import { useContactForm } from '../../hooks/Contact/useContactForm'

interface Props { }

function ContactForm(props: Props) {
    const { } = props
    const { formik } = useContactForm()
    return (
        <>
            <p className='font-[100]'>You wanna talk to me?</p>
            <h1 className='text-3xl  mt-1'>Lets <span className='font-bold'>Talk</span></h1>
            <form
                onSubmit={formik.handleSubmit}
                className='mt-8 gap-5 flex flex-col '>
                <div className='gap-5 flex'>
                    <ContactTextField<string>
                        handleBlur={formik.handleBlur}
                        isTouched={formik.touched.name}
                        helperText={formik.errors.name}
                        value={formik.values.name}
                        handleChange={formik.handleChange}
                        required
                        name='Name' type='text' />
                    <ContactTextField<string>
                        value={formik.values.company}
                        handleBlur={formik.handleBlur}
                        isTouched={formik.touched.company}

                        helperText={formik.errors.company}
                        handleChange={formik.handleChange} name='Company' type='text' />
                </div>
                <div className='gap-5 flex'>
                    <ContactTextField<string>
                        value={formik.values.email}
                        handleBlur={formik.handleBlur}
                        required
                        isTouched={formik.touched.email}
                        helperText={formik.errors.email}
                        handleChange={formik.handleChange} name='email' type='email' />
                    <ContactTextField<number | undefined>
                        value={formik.values.phone}
                        required
                        handleBlur={formik.handleBlur}
                        isTouched={formik.touched.phone}
                        helperText={formik.errors.phone}
                        handleChange={formik.handleChange} name='phone' type='tel' />
                </div>
                <textarea
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    name='message' placeholder='Message*'
                    className='border w-full min-h-36 placeholder:text-[#ffffff7f] border-[#ffffff4f] bg-[#ffffff1f] rounded-lg px-3 py-2' >
                </textarea>
                {
                    formik.errors.message && formik.touched.message && <p>{formik.errors.message}</p>
                }
                <div className=''>
                    <PortfolioButton
                        isSubmit={true}
                        type='gradient'>
                        <span>     </span>  Submit <span>     </span>
                    </PortfolioButton>
                </div>
            </form>
        </>
    )
}

export default ContactForm
