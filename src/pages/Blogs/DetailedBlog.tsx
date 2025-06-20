import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { useBlog } from '../../hooks/useBlog';
import BlogsLoading from '../../components/Loading/BlogsLoading';
import './DetailedBlog.css'
import { useBlogContextMenu } from '../../hooks/useBlogContextMenu';
import BlogContextMenu from '../../components/ContextMenu/BlogContextMenu';
import ProgressLoading from '../../components/Loading/ProgressLoading';

interface params {
    id: string
}

function DetailedBlog() {
    const { id } = useParams<{ id: string }>();
    const { isLoading, getDetailedBlog, blog, deleteBlog } = useBlog()
    const { handleContextMenu, handleMenuItemClick, menuPosition, menuVisible } = useBlogContextMenu()
    const blogDataRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (id)
            getDetailedBlog(id)
    }, [])

    useEffect(() => {
        if (blog)
            blogDataRef.current!.innerHTML = blog.blogData
    }, [blog])

    return (
        <div
            onContextMenu={handleContextMenu}
            className='w-[850px] max-lg:w-full mx-auto max-lg:px-4 pt-10 max-md:pt-5'>
            {
                isLoading && blog == null ? <BlogsLoading /> : <>
                    {
                        isLoading && <ProgressLoading />
                    }
                    <h1 className='text-4xl max-md:text-2xl text-black font-serif mb-6'>{blog?.title}</h1>
                    <img className='aspect-video  object-cover rounded-2xl' src={`${blog?.coverImage}`} alt="" />
                    <p className='mt-2 text-gray-500'>{blog?.date.toLocaleDateString()}</p>
                    <div ref={blogDataRef} className='mt-5 mb-20 break-all blog-data'>
                    </div>
                    {menuVisible && <BlogContextMenu id={id!} deleteBlog={deleteBlog} handleMenuItemClick={handleMenuItemClick} menuPosition={menuPosition} />}
                </>
            }
        </div>
    )
}

export default DetailedBlog
