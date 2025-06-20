import type { BlogModel } from '../../models/BlogModel'
import { useNavigate } from 'react-router-dom'
import { cloudinaryService } from '../../services/cloudinary_service'

interface Props {
    blog: BlogModel
}

function BlogTile(props: Props) {
    const { blog } = props
    const url = blog.coverImage!.toString()
    const { getResizedImage } = cloudinaryService()
    console.log("blog tile component loaded:", blog.title)

    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/blogs/view/${blog.id}`)} className='text-gray-500 p-3 hover:bg-gray-50 rounded-3xl pb-10 cursor-pointer' >
            <img className='aspect-video object-cover rounded-2xl'
                src={`${getResizedImage(url, 500)}`} alt="" />
            <p className='mt-1 uppercase text-sm'>{
                new Date(blog.date).toLocaleDateString()
            }</p>
            <h1 className='text-xl text-black font-serif my-2 capitalize line-clamp-1'>{blog.title}</h1>
            <p className='line-clamp-3 pr-4'>
                {blog.description}
            </p>
        </div>
    )
}

export default BlogTile
