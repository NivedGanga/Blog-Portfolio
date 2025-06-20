import nodataimage from '../../assets/no_data_cloud_lottie.json'
import Lottie from "lottie-react";
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';



function EmptyBlogsLanding() {
    const navigate = useNavigate()
    return (
        <div className='my-20 h-[50vh] grid place-content-center place-items-center relative'>
            <Lottie className='w-[35rem] my-4 opacity-50 -translate-x-5' animationData={nodataimage} loop={true} />
            <button
                onClick={() => navigate('/new-blog')}
                className='text-2xl font-serif text-[#a35c27] flex items-center gap-2 cursor-pointer px-5 py-2 hover:scale-105 transition-all rounded-xl'>Create Your First Blog <BsArrowRight /></button>
        </div>
    )
}

export default EmptyBlogsLanding
