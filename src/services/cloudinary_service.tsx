import { cloudinaryConfig } from "../../cloudinary.config"

export const cloudinaryService = () => {
    const uploadImage = async (file: File) => {
        const formData = new FormData();
        formData.append('upload_preset', 'Blog_preset');
        formData.append('file', file);
        return fetch(`https://api.cloudinary.com/v1_1/${cloudinaryConfig.getConfig().cloud?.cloudName}/image/upload`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    throw new Error(data.error.message);
                }
                return data;
            });
    }

    const getResizedImage = (url: string, width: number) => {
        const index = url.indexOf('/upload') + 7
        const firstHalf = url.substring(0, index)
        const secondHalf = url.substring(index, url.length)
        const imageUrl = firstHalf + '/w_' + width + secondHalf
        return imageUrl
    }
    return {
        uploadImage,
        getResizedImage
    }
}