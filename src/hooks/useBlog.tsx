import { useState } from "react"
import type { BlogModel } from "../models/BlogModel"
import { blogService } from "../services/blog_services"
import { setBlogs } from '../redux/slices/blogSlice'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
export const useBlog = () => {
    const [isLoading, setLoading] = useState<boolean>(false)
    const [blogs, setBlogsResult] = useState<Array<BlogModel>>()
    const [success, setSuccess] = useState<boolean | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [blog, setBlog] = useState<BlogModel | null>(null)
    const [editSuccess, setEditSuccess] = useState<boolean | null>(null)
    const blogServices = blogService()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const saveBlog = async (blog: BlogModel) => {
        setLoading(true)
        await blogServices.saveBlog(blog)
            .then(() => {
                getBlogs()
                setSuccess(true)
            }
            )
            .catch((error) => {
                console.error(error)
                setError(error)
            })
        setLoading(false)
    }

    const getBlogs = async () => {
        setLoading(true)
        await blogServices.fetchBlogs()
            .then((res) => {
                const blogsArray: BlogModel[] = res.map((doc: any) => ({
                    ...doc.data(),
                    date: Date.parse(doc.data().date),
                    id: doc.id
                }))

                setBlogsResult(blogsArray)

                dispatch(setBlogs(blogsArray))
            })
            .catch((error) => {
                setError(error)
            })
        setLoading(false)
    }

    const getDetailedBlog = async (id: string) => {
        setLoading(true)
        setBlog(null)

        await blogServices.fetchDetailedBlog(id)
            .then((res) => {
                if (res) {
                    const detailedBlog: BlogModel = {
                        ...res.data(),
                        date: new Date(res.data()?.date),
                        id: res.id
                    } as BlogModel

                    setBlog(detailedBlog)
                    setSuccess(true)
                }
            })
            .catch((error) => {
                console.error(error)
                setError(error)
            })
        setLoading(false)
    }

    const deleteBlog = async (id: string) => {

        setLoading(true)
        await blogServices.deleteBlogService(id)
            .then(() => {
                getBlogs()
                setSuccess(null)
                navigate(-1)
            })
            .catch((error) => {
                console.error(error)
                setError(error)
            })
        setLoading(false)
    }

    const editBlog = async (newBlog: BlogModel, oldBlog: BlogModel) => {
        setLoading(true)
        await blogServices.editBlogService(newBlog, oldBlog)
            .then(() => {
                getBlogs()
                setEditSuccess(true)
            })
            .catch((error) => {
                setError(error)
            })
    }

    return {
        isLoading,
        blogs,
        saveBlog,
        success,
        error,
        getBlogs,
        blog,
        getDetailedBlog,
        deleteBlog,
        editSuccess,
        editBlog
    }

}