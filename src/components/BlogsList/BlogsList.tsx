import BlogTile from '../BlogTile/BlogTile'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'



function BlogsList() {
    const blogs = useSelector((state: RootState) => state.blog.blogs)
    return (
        blogs.length > 1 &&
        <div className='py-5 mb-10'>
            <h1 className='text-3xl font-serif text-center text-[#a35c27]'>My Blogs</h1>
            <div className='grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 mt-10 gap-x-4 gap-y-8'>
                {
                    blogs.slice(1, blogs.length).map((blog, index) => (
                        <BlogTile key={index} blog={blog} />
                    ))
                }
            </div>
        </div>
    )
}

export default BlogsList
