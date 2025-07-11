import BlogsLanding from '../../containers/BlogsLanding/BlogsLanding'
import AddNewBlogButton from '../../components/Buttons/AddNewBlogButton'

import React, { Suspense, useEffect } from 'react'

import BlogsLoading from '../../components/Loading/BlogsLoading'
import { useBlog } from '../../hooks/useBlog'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'


const LazyBlogsList = React.lazy(() => import('../../components/BlogsList/BlogsList'));

function Blogs() {
    const { getBlogs, isLoading } = useBlog()
    const stateBlogs = useSelector((state: RootState) => state.blog.blogs)

    useEffect(() => {
        // const targetElement = document.getElementById("blogs");
        // if (targetElement) {
        //     targetElement.scrollIntoView({ behavior: 'smooth' });
        // }
        if (stateBlogs.length == 0) {

            getBlogs()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='max-w-[1024px] mx-auto '>
            {
                isLoading ? <BlogsLoading /> :
                    (<>
                        <BlogsLanding />
                        <Suspense>
                            <LazyBlogsList />
                        </Suspense>
                        <AddNewBlogButton />
                    </>)
            }

        </div>
    )
}

export default Blogs
