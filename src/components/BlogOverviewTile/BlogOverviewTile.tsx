import { useNavigate } from 'react-router-dom'
import { cloudinaryService } from '../../services/cloudinary_service'

interface Props {
    title: string
    description: string
    date: string
    id: string
    coverImage: any
}

function BlogOverviewTile(props: Props) {
    const { title, description, date, id, coverImage } = props
    const { getResizedImage } = cloudinaryService()
    const navigate = useNavigate()
    return (
        <div
            onClick={() => navigate(`/blogs/view/${id}`)}
            className='flex max-md:flex-col p-6 max-sm:p-3 justify-between cursor-pointer w-full mt-3 gap-40 max-md:gap-5 hover:scale-[100.4%] bg-gradient-to-r from-[#ffffff0f] hover:from-[#ffffff1f] to-transparent rounded-lg  transition-all duration-300'>
            <div className='flex flex-col items-start gap-3'>
                <h1 className='font-bold text-lg capitalize line-clamp-2 text-left'>{title}</h1>
                <p className='line-clamp-3 text-base font-extralight'>{description}</p>
                <p className='font-semibold text-xs'>{date}</p>
            </div>
            <img className='w-56 max-md:w-full aspect-[4/3] max-md:aspect-video object-cover rounded-lg' src={getResizedImage(coverImage, 400)} alt="" />
        </div>
    )
}

export default BlogOverviewTile
