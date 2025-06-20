import React from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";
import PortfolioButton from '../../components/Buttons/PortfolioButton';


const Landing = React.memo(() => {

    return (
        <div id='home' className='w-full h-[70vh] grid place-content-center'>
            <div className='h-fit w-fit text-center font-serif flex flex-col gap-6 items-center'>
                <h1 className='text-2xl font-extralight  tracking-widest max-md:text-lg'>HOLA! I'm Nived G.</h1>
                <h1 className='text-5xl max-md:text-3xl max-md:px-12'>Frontend to Backend, I Build It All.</h1>
                <div className='flex font-sans font-semibold gap-5 mt-14'>
                    <PortfolioButton
                        onClick={() => {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }}
                        type='filled'>
                        <FaArrowRight /> Get in touch
                    </PortfolioButton>
                    <a target='_blank' href="https://drive.google.com/file/d/1XLqsAlutzrHDgGtsRULasB4qBFQSKnmF/view?usp=sharing">
                        <PortfolioButton type='gradient'>
                            <FaArrowDown />  Download cv
                        </PortfolioButton>
                    </a>
                </div>
            </div>
        </div>
    )
}
)
export default Landing
