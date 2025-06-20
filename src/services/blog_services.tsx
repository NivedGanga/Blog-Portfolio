import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, setDoc, Timestamp } from "firebase/firestore";
import type { BlogModel } from "../models/BlogModel";
import { db } from "../../firebase.config";
import { cloudinaryService } from "./cloudinary_service";

export const blogService = () => {
    const cloudinaryServices = cloudinaryService()
    const saveBlog = async (blog: BlogModel) => {
        try {
            if (blog.coverImage)
                await cloudinaryServices.uploadImage(blog.coverImage)
                    .then(async (res) => {
                        await addDoc(collection(db, "blogs"),
                            { ...blog, date: blog.date.toString(), coverImage: res.url, createdAt: Timestamp.now() })
                    })
                    .catch((error) => {
                        throw Error(error)
                    })
            return true
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    const fetchBlogs = async () => {
        try {
            const q = query(collection(db, "blogs"),
                orderBy("createdAt", "desc"));
            const docs = await getDocs(q)
            return docs.docs
        } catch (error) {
            throw error
        }
    }

    const fetchDetailedBlog = async (id: string) => {
        try {
            const docref = doc(db, "blogs", id)
            const docSnap = await getDoc(docref)
            return docSnap
        } catch (error) {
            throw error
        }
    }

    const deleteBlogService = async (id: string) => {
        try {
            const docRef = doc(db, "blogs", id)
            await deleteDoc(docRef)
            return true
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    const editBlogService = async (newBlog: BlogModel, oldBlog: BlogModel) => {
        try {
            if (oldBlog.coverImage !== newBlog.coverImage && newBlog.coverImage)
                await cloudinaryServices.uploadImage(newBlog.coverImage)
                    .then(async (res) => {
                        const docRef = doc(db, "blogs", oldBlog.id!)
                        await setDoc(docRef, { ...newBlog, date: newBlog.date.toString(), coverImage: res.url, createdAt: oldBlog.createdAt ?? Timestamp.now() })
                    })
                    .catch((error) => {
                        throw Error(error)
                    })
            else {
                const docRef = doc(db, "blogs", oldBlog.id!)
                await setDoc(docRef, { ...newBlog, date: newBlog.date.toString(), createdAt: oldBlog.createdAt ?? Timestamp.now() })
            }
            return true
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    return ({
        saveBlog,
        fetchBlogs,
        fetchDetailedBlog,
        deleteBlogService,
        editBlogService
    })
}

