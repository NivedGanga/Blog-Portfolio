import BlogsLanding from '../../containers/BlogsLanding/BlogsLanding'
import BlogsList from '../../components/BlogsList/BlogsList'
import AddNewBlogButton from '../../components/Buttons/AddNewBlogButton'

import { useEffect } from 'react'

import BlogsLoading from '../../components/Loading/BlogsLoading'
import { useBlog } from '../../hooks/useBlog'
import { useSelector } from 'react-redux'
import type { Reducer } from 'redux'
import type { RootState } from '../../redux/store'

interface Props { }

function Blogs(props: Props) {
    const { } = props
    const { getBlogs, isLoading } = useBlog()
    const stateBlogs = useSelector((state: RootState) => state.blog.blogs)

    useEffect(() => {
        if (stateBlogs.length == 0) {
            console.log("fetching blogs")
            getBlogs()
        }
    }, [])

    return (
        <div className='max-w-[1024px] mx-auto '>
            {
                isLoading ? <BlogsLoading /> :
                    (<>
                        <BlogsLanding />
                        < BlogsList />
                        <AddNewBlogButton />
                    </>)
            }


        </div>
    )
}

export default Blogs
