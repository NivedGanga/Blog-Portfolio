import type { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'
import { BsArrowRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import EmptyBlogsLanding from './EmptyBlogsLanding'



function BlogsLanding() {
    const blog = useSelector((state: RootState) => state.blog.blogs)[0]

    const navigate = useNavigate()
    return (
        blog ?
            <div id='blogs' className='p-5 flex gap-10 max-md:gap-5 mb-20 pt-20 max-md:flex-col max-md:mt-5'>
                <div className='flex-1'>
                    <img className='aspect-[4/3] h-fit  object-cover rounded-2xl'
                        src={`${blog.coverImage}`}
                        alt="" />
                </div>
                <div className='flex flex-col flex-1 gap-6 text-gray-500'>
                    <h4 className='uppercase'>{
                        new Date(blog.date).toLocaleDateString()
                    }</h4>
                    <h1 className='text-black capitalize text-3xl tracking-wide font-serif'>{blog.title}</h1>
                    <div className='line-clamp-5'>
                        <p>{
                            blog.description
                        }</p>
                    </div>
                    <button onClick={() => navigate(`/blogs/view/${blog.id}`)} className='flex items-center gap-2 font-serif text-[#a35c27] py-2 cursor-pointer rounded-xl hover:scale-[102%] text-lg w-fit transition-transform duration-200'>
                        Read More <BsArrowRight />
                    </button>
                </div>
            </div> : <EmptyBlogsLanding />
    )
}

export default BlogsLanding
