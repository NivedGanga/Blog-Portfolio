
import Editor from './Editor';
import 'quill/dist/quill.snow.css';
import UploadImage from '../../components/UploadImage/UploadImage';
import { useParams } from 'react-router-dom';
import ProgressLoading from '../../components/Loading/ProgressLoading';
import { useNewBlogForm } from '../../hooks/NewBlog/useNewBlogForm';

function NewBlog() {
    const { isLoading, formik, blog, quillRef } = useNewBlogForm()
    const { id } = useParams()

    return (
        <div className='w-[1024px] max-md:w-full max-md:px-4 max-md:mb-32 mx-auto my-[5%]'>
            {
                isLoading && <ProgressLoading />
            }
            <h1 className='text-3xl bg-light-primarycolor font-semibold text-[#a35c27] font-serif mb-8'>
                {
                    id ? 'Edit blog' : 'Create New Blog '
                }
            </h1>
            <form onSubmit={formik.handleSubmit}>
                <input
                    name='title'
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text" className={`border w-full border-gray-400 px-4 py-2 rounded-xl ${formik.errors.title && formik.touched.title && 'border border-red-600'}`} placeholder='Title' />
                {formik.errors.title && formik.touched.title ? <p className='text-red-600 text-xs'>{formik.errors.title}</p> : null}
                <UploadImage handleBlur={formik.handleBlur} url={blog ? blog!.coverImage! : undefined} handleChange={formik.handleChange} />
                {formik.errors.coverImage && formik.touched.coverImage ? <p className='text-red-600 text-xs'>{formik.errors.coverImage}</p> : null}
                <Editor
                    formik={formik}
                    ref={quillRef}
                />
                {formik.errors.blogData && formik.touched.blogData ? <p className='text-red-600 text-xs'>{formik.errors.blogData}</p> : null}
                <button type='submit' className='px-7 py-2 rounded-xl cursor-pointer bg-[#a35c27] text-white font-semibold mt-5 mx-auto block'>
                    Save Blog
                </button>
            </form>
        </div>
    );
}

export default NewBlog
