import React from 'react'

interface Props {
    children: React.ReactNode
    type: 'filled' | 'gradient'
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    isSubmit?: boolean
}

function PortfolioButton(props: Props) {
    const { children, type, onClick, isSubmit = false } = props;

    return (
        <button
            type={isSubmit ? 'submit' : "button"}
            onClick={onClick}
            className={
                `cursor-pointer border rounded-lg px-5 py-4 flex items-center gap-3 text-sm font-semibold
                hover:bg-[#ffffff0f]
                 ${type === 'gradient' ? 'bg-gradient-to-r  border-[#ffffff0f] from-[#ffffff0f] to-transparent text-white' :
                    'bg-white text-black hover:bg-gray-100'
                }`}
        >
            {children}
        </button>
    );
}

export default PortfolioButton;
