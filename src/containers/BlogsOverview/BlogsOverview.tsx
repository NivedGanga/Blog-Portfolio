import { useEffect } from 'react'
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection'
import BlogOverviewTile from '../../components/BlogOverviewTile/BlogOverviewTile'
import { FaArrowRight } from 'react-icons/fa6'
import PortfolioButton from '../../components/Buttons/PortfolioButton'
import { useNavigate } from 'react-router-dom'
import { useBlog } from '../../hooks/useBlog'
import './BlogsOverview.css'

function BlogsOverview() {
    const navigate = useNavigate()
    const { isLoading, getBlogs, blogs } = useBlog()
    useEffect(() => {
        getBlogs()
    }, [])
    return (
        <div id='blogs-overview' className='my-56'>
            <PortfolioSection title='Blogs'>
                {
                    isLoading ? '' :
                        <div className='flex flex-col w-full relative'>
                            {
                                blogs ?
                                    blogs.slice(0, Math.min(5, blogs.length)).map((blog, index) => (
                                        <BlogOverviewTile
                                            key={index}
                                            id={blog.id!}
                                            date={new Date(blog.date).toLocaleDateString()}
                                            title={blog.title}
                                            coverImage={blog.coverImage}
                                            description={blog.description}
                                        />
                                    )) : 'no blogs'
                            }
                            <div className='gradient-blur pt-32 translate-y-16 flex bottom-0 absolute justify-center w-[130%] max-md:w-full -mx-[15%] max-md:mx-0 items-end'>
                                <PortfolioButton onClick={() => navigate('/blogs')} type='gradient'>
                                    <FaArrowRight /> Read more
                                </PortfolioButton>
                            </div>
                        </div>
                }

            </PortfolioSection>
        </div>
    )
}

export default BlogsOverview
