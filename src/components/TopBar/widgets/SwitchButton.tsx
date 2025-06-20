import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Switch: React.FC = () => {
    const [active, setActive] = useState<'portfolio' | 'blog' | null>(null);
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const path = location.pathname
        console.log(path)
        if (path.indexOf('/blogs') >= 0) {
            setActive('blog')
        } else if (path === '/') {
            setActive('portfolio')
        }
    }, [location])

    useEffect(() => {
        if (active == 'portfolio') {
            navigate('/')
        } else if (active == 'blog' && location.pathname == '/') {
            navigate('/blogs')
        }
    }, [active])

    return (
        <div className={`
        flex text-sm items-center justify-center rounded-full cursor-pointer
        ${active == 'portfolio' && `bg-[#0000003f]`}
        `}>
            <div className={`flex rounded-full p-1 transition-all duration-1000 cursor-pointer
                bg-gradient-to-r from-transparent  to-transparent
                ${active === 'blog' ? 'bg-[position:0%_50%]' : 'bg-[position:100%_50%]'}
                ${active === 'blog'
                    ? `inset-shadow-[-2px_2px_2px_rgba(0,0,0,0.1)] via-[#0000000f] shadow-[-1px_1px_2px_rgba(0,0,0,0.2)]`
                    : `inset-shadow-[2px_2px_2px_rgba(255,255,255,0.1)] via-[#ffffff0f] shadow-[1px_1px_1px_rgba(255,255,255,0.1)]`}`}
                style={{ backgroundSize: '200% 100%' }}
            >
                <button
                    className={`px-4 py-2 cursor-pointer rounded-full transition-all duration-800 transform ${active === 'portfolio'
                        ? ' text-orange-400 scale-105'
                        : 'text-[#0000006f] scale-95'
                        }`}
                    onClick={() => setActive('portfolio')}
                >
                    PORTFOLIO
                </button>
                <button
                    className={`px-4 py-2 cursor-pointer rounded-full transition-all duration-800 transform ${active === 'blog'
                        ? ' text-[#ff8904cf] scale-105'
                        : 'text-[#ffffff6f] scale-95'
                        }`}
                    onClick={() => setActive('blog')}
                >
                    BLOGS
                </button>
            </div>
        </div>
    );
};

export default Switch;