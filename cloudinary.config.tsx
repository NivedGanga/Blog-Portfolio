
import { Cloudinary } from "@cloudinary/url-gen";

export const cloudinaryConfig = new Cloudinary({
    cloud: {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY ,
        apiSecret: import.meta.env.VITE_CLOUDINARY_API_SCRET
    },
});
