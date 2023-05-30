import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: process.env.NUXT_FIREBASE_API_KEY,
  projectId: process.env.NUXT_FIREBASE_PROJECT_ID,
}

export const firebaseApp = initializeApp(firebaseConfig, "needa-server")
export const firestore = getFirestore(firebaseApp)
