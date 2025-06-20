import { Firestore } from "firebase/firestore"
import { firebaseApp } from "../../firebase.config"
import { getFirestore } from "firebase/firestore"

export function firestoreInstance(): Firestore {
    return getFirestore(firebaseApp)
}