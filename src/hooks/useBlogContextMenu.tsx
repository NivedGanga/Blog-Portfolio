import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useBlogContextMenu = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const navigate = useNavigate()
    
    const handleContextMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        setMenuVisible(true);
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        setMenuPosition({ x: mouseX, y: mouseY });
        document.addEventListener('click', handleOutsideClick);
    };

    const handleOutsideClick = (e: MouseEvent) => {
        if (e.target && !(e.target as Element).closest('.custom-menu')) {
            setMenuVisible(false);
            document.removeEventListener('click', handleOutsideClick);
        }
    };

    const handleMenuItemClick = (item: string, deleteBlog: Function, id: string) => {
        switch (item) {
            case 'Edit':
                navigate(`/blogs/edit-blog/${id}`)
                break;
            case 'Delete':
                console.log("helloo delte fucntion callling")
                deleteBlog(id)
                break;
            default:
                break;
        }
        setMenuVisible(false);
    };
    return {
        handleContextMenu,
        handleMenuItemClick,
        menuPosition,
        menuVisible
    }
}