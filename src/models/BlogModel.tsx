import type { Timestamp } from "firebase/firestore"

export interface BlogModel {
    id?: string
    title: string,
    coverImage: File | null,
    blogData: string,
    description: string,
    date: Date,
    createdAt?: Timestamp
}