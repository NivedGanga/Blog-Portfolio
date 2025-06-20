import './ContactMe.css'
import ContactForm from '../../components/ContactForm/ContactForm'

interface Props { }

function ContactMe(props: Props) {
    const { } = props

    return (
        <div className='main-map-bg flex max-md:flex-col mt-26 h-[100vh] p-[15%] max-md:p-0'>
            <div className='map-preview flex-1 flex max-md:h-96 flex-col max-md:w-full justify-center'>
                <a target='_blank' className='h-9/12 max-md:h-full w-8/12 max-md:w-full' href="https://maps.app.goo.gl/FLBfxL6fTHZx2Kws9">
                </a>
            </div>
            <div id='contact' className='flex-1 flex flex-col justify-center max-md:mx-[10%] max-md:mb-36'>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactMe
