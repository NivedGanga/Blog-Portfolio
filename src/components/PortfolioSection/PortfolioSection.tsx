import React from 'react'

interface Props {
    children: React.ReactNode
    title: string
}

function PortfolioSection(props: Props) {
    const { children, title } = props

    return (
        <div className='flex mx-[15%] max-lg:mx-[8%] max-lg:flex-col gap-24 max-lg:gap-10'>
            <h2 className='font-extralight tracking-widest font-serif text-xl uppercase mt-5'>
                {title}
            </h2>
            <div className='leading-8 w-full font-light'>
                {children}
            </div>
        </div>
    )
}

export default PortfolioSection
