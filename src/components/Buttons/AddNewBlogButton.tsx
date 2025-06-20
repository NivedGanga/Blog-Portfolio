import { useNavigate } from 'react-router-dom'

interface Props {
    isAbsolute?: boolean
}

function AddNewBlogButton(props: Props) {
    const { isAbsolute = true } = props
    const navigate = useNavigate()
    return (
        <div className={`${isAbsolute && 'fixed'} bottom-10 right-10 max-md:bottom-5 max-md:right-5 w-fit`} >
            <div className='rounded-[18px] bg-gradient-to-br  from-gray-100 to-white p-[6px]'>
                <button onClick={() => navigate('/new-blog')} className='text-[#a35c27] cursor-pointer rounded-[13px] border border-gray-300 bg-gradient-to-tl from-gray-100 to-white p-[5px]'>
                    <div className='text-sm font-semibold rounded-[10px] bg-gradient-to-br from-gray-100 to-white px-4 py-2'>
                        New Blog
                    </div>
                </button>
            </div>
        </div >
    )
}

export default AddNewBlogButton