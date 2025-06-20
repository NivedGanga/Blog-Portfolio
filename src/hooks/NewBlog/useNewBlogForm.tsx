import { useFormik } from 'formik';
import type { BlogModel } from '../../models/BlogModel';
import { useBlog } from '../useBlog';
import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type Quill from 'quill';
import * as Yup from 'yup';

type FormModel = {
    title: string,
    coverImage: File | null,
    description: string,
    blogData: string
}
const initialValues: FormModel = {
    coverImage: null,
    description: '',
    title: '',
    blogData: ''
}

export const useNewBlogForm = () => {
    const { saveBlog, isLoading, error, success, getDetailedBlog, blog, editSuccess, editBlog } = useBlog()
    const { id } = useParams()
    const navigate = useNavigate()
    const quillRef = useRef<Quill | null>(null);

    useEffect(() => {
        if (id) {
            getDetailedBlog(id)
        }
    }, [])

    const newBlogSchema = Yup.object().shape({
        title: Yup.string().required("Title is required").min(3, "Title must have atleast 3 characters"),
        coverImage: Yup.mixed().required("Cover Image is Required"),
        description: Yup.string().required().min(100),
        blogData: Yup.string().required().min(100)
    })

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: newBlogSchema,
        onSubmit(values) {
            const newblog: BlogModel = {
                title: values.title,
                blogData: values.blogData,
                coverImage: values.coverImage,
                date: new Date(),
                description: values.description
            }
            if (blog) {
                editBlog(newblog, blog)
                return;
            }
            saveBlog(newblog)
        },
    })

    useEffect(() => {
        if (editSuccess)
            navigate(-1)
        if (id && blog && success) {
            const newFormData: FormModel = {
                coverImage: blog.coverImage,
                description: blog.description,
                title: blog.title,
                blogData: blog.blogData
            };
            console.log("Setting form data to:", newFormData);
            if (quillRef.current && blog.blogData) {
                const editor = quillRef.current;
                editor.clipboard.dangerouslyPasteHTML(blog.blogData);
            }
            formik.setValues(
                newFormData
            )
        }
        if (!id && success) {
            console.log("upload success")
            navigate(-1)
        }
        if (error) {
            console.log(error)
        }
    }, [success, error, editSuccess])

    return {
        isLoading,
        formik,
        blog,
        quillRef
    }
}