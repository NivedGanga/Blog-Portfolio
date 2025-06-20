import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


interface Props { }

function BlogsLoading(props: Props) {
    const { } = props

    return (
        <div className='p-5 flex max-md:flex-col gap-10 my-20 max-md:mt-5 w-full'>
            <div className='h-fit flex-1'>
                <Skeleton width={"100%"} height="21rem" borderRadius={20} className='flex-1'></Skeleton>
            </div>
            <div className='flex flex-col flex-1 gap-6 text-gray-500'>
                <Skeleton width="10%" height='1rem'></Skeleton>
                <Skeleton height={30} width='20rem'>

                </Skeleton>
                <Skeleton count={5} width='100%'>

                </Skeleton>
            </div>
        </div>
    )
}

export default BlogsLoading
