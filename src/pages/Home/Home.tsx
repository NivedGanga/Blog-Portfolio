import { useEffect } from 'react'
import About from '../../containers/About/About'
import Landing from '../../containers/Landing/Landing'
import BlogsOverview from '../../containers/BlogsOverview/BlogsOverview'
import ContactForm from '../../containers/ContactMe/ContactMe'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'
import ProgressLoading from '../../components/Loading/ProgressLoading'



function Home() {
    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            const targetElement = document.querySelector('#home');
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);
    const contactState = useSelector((state: RootState) => state.contact)

    return (
        <>
            {
                contactState.isLoading && <ProgressLoading />
            }
            <Landing />
            <About />
            <BlogsOverview />
            <ContactForm />
        </>
    )
}

export default Home
