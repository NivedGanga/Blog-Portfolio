import React, { useState, useRef, useEffect } from 'react'
import { IoMdMenu } from "react-icons/io";
import TopBarButton from '../TopBar/widgets/TopBarButton';
import { topBarRoutes } from '../../utils/routes';

interface Props { }

function HamburgerMenu(props: Props) {
    const { } = props
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                iconRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !iconRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <div ref={iconRef}>
                <IoMdMenu size={25} onClick={toggleMenu} className="cursor-pointer" />
            </div>
            <div
                onClick={() => setIsOpen(false)}
                ref={menuRef}
                className={`fixed translate-y-1/3 left-15 font-semibold bg-[#ffffff0f] p-5 w-[60vw] rounded-xl flex flex-col text-center items-center gap-3 backdrop-blur-xs border-[1px] border-[#ffffff4f] transition-all duration-300 ease-in-out ${isOpen
                    ? 'opacity-100 scale-100 translate-y-1/3'
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    }`}>
                {
                    topBarRoutes.map((item, index) => (
                        <TopBarButton id={item.id} text={item.text} key={index} />
                    ))
                }
            </div>
        </>
    )
}

export default HamburgerMenu
