import React from 'react'
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection'

interface Props { }

function About(props: Props) {
    const { } = props

    return (
        <div id='about' className='my-56'>
            <PortfolioSection title='About'>
                <p className='font-light max-md:text-sm pl-6 max-lg:p-0'>
                    I am a passionate Software Developer with expertise in building beautiful and functional applications using technologies like Flutter, React, and Node.js. With hands-on experience in mobile and web development, I have successfully delivered over 10 projects, ensuring high performance and user satisfaction. I am also a mentor, having guided over 100 students in Flutter development, helping them bring their ideas to life.

                    As a tech enthusiast, I thrive on exploring new technologies and staying updated with industry trends. I believe in the power of collaboration and have actively contributed to the tech community by organizing events, workshops, and seminars. My goal is to continuously learn, innovate, and create impactful solutions that make a difference.

                    Let's connect and build something amazing together!
                </p>
            </PortfolioSection>
        </div>
    )
}

export default About
