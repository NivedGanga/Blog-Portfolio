import React from 'react';
interface props {
    handleMenuItemClick: Function
    menuPosition: any
    deleteBlog: Function
    id: string
}
function BlogContextMenu(props: props) {
    const { handleMenuItemClick, menuPosition, deleteBlog, id } = props
    const menuItems: Array<{ name: string, color: string }> = [{
        "name": "Edit",
        "color": ""
    }, {
        "name": "Delete",
        "color": "text-red-500"
    }];

    const handleClick = (item: string) => {
        handleMenuItemClick(item, deleteBlog, id);
    };

    return (
        <div className="custom-menu rounded-lg  shadow bg-white absolute w-36" style={{ left: menuPosition.x, top: menuPosition.y }}>
            {menuItems.map((item) => (
                <div className={`cursor-pointer w-full rounded-lg px-4 py-2 hover:bg-slate-200 ${item.color}`} key={item.name} onClick={() => handleClick(item.name)}>
                    {item.name}
                </div>
            ))}
        </div>
    );
}

export default BlogContextMenu;