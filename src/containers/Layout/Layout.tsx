import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import bgImage from "../../assets/bg.png";
import { useTheme } from '../../hooks/ThemeProvider';

const Layout: React.FC = () => {
    const { theme, setTheme } = useTheme()
    const location = useLocation()
    const imageRef = useRef<HTMLImageElement>(null)
    const [scrollOpacity, setScrollOpacity] = useState(1)

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const scrollElement = event.target as HTMLElement;
        const scrollTop = scrollElement.scrollTop;
        const scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
        const viewportHeight = window.innerHeight;
        const fadeDistance = viewportHeight * 1.5;
        const distanceFromBottom = scrollHeight - scrollTop;

        const opacity = Math.min(1, Math.max(0, (distanceFromBottom - fadeDistance) / fadeDistance));

        if (theme.isDark()) {
            setScrollOpacity(opacity);
        }
    }

    useEffect(() => {
        if (location.pathname.indexOf('/blogs') >= 0) {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }, [location])

    return (
        <div
            className={`w-full h-screen relative ${theme.isDark() && 'bg-[#0f0f0f]'}`}
        >
            <img
                ref={imageRef}
                className={
                    `w-full h-full transition-opacity duration-75 ${theme.isLight() && 'opacity-0'}`
                }
                style={{
                    opacity: theme.isDark() ? scrollOpacity : 0
                }}
                src={bgImage}
                alt=""
            />
            <div className={
                `absolute w-full h-screen overflow-hidden flex flex-col  transition-all duration-400 top-0
             ${theme.isDark() ?
                    'text-white' :
                    'text-black'
                }`}>
                <TopBar />
                <div
                    className="flex-1 overflow-y-auto scrollbar-hide"
                    onScroll={handleScroll}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
