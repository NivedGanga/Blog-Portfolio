import emailjs from '@emailjs/browser';
import type { ContactModal } from '../hooks/Contact/useContactForm';


export const emailSerices = () => {
    const sendMail = async (formData: ContactModal) => {
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    company: formData.company,
                    email: formData.email,
                    mobile: formData.phone,
                    message: formData.message
                },
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                },
            );
            return true
        } catch (err) {

            return err
        }
    }
    return {
        sendMail
    }
}