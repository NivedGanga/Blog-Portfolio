import type { FormikProps } from 'formik'
import React, { useEffect, useState } from 'react'

interface Props {
    handleChange: Function
    url?: File | null
    handleBlur: React.FocusEventHandler<HTMLInputElement>
}

function UploadImage(props: Props) {
    const { handleChange, url = null, handleBlur } = props
    const [file, setFile] = useState<File | null>(url)
    const [previewUrl, setPreviewUrl] = useState<string | null>()
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]
        if (selectedFile && ['png', 'jpg', 'jpeg', 'webp'].includes(selectedFile.type.split('/')[1])) {
            setFile(selectedFile)
            const url = URL.createObjectURL(selectedFile)
            setPreviewUrl(url)
            const syntheticEvent = {
                ...e,
                target: {
                    ...e.target,
                    value: selectedFile,
                    name: 'coverImage'
                }
            }
            handleChange(syntheticEvent)
        }
    }
    useEffect(() => {
        setFile(url)
        setPreviewUrl(url ? url.toString() : null)
    }, [url])
    return (
        <div className='relative cursor-pointer w-96 h-60  mt-5 border rounded-xl  border-gray-400 grid place-items-center'>
            <input
                name='coverImage'
                value={''}
                onBlur={handleBlur}
                onChange={handleFileChange}
                className='w-full h-full cursor-pointer border border-gray-400 rounded-xl opacity-0 absolute inset-0'
                type="file"
                id="file-upload"
            />
            {
                previewUrl == null ? (
                    <label htmlFor="file-upload" className='text-lg font-semibold text-gray-500 text-center'>
                        <span className='text-sm font-normal'>Click to upload or Drag and drop</span> <br />
                        Cover Image
                    </label>
                ) : (
                    <img src={previewUrl} className='object-contain w-96 h-60 p-5 ' alt="" />
                )
            }


        </div>
    )
}

export default UploadImage
