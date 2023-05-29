import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore/lite"

const config = useRuntimeConfig()

const firebaseConfig = {
  apiKey: config.firebaseApiKey,
  authDomain: config.firebaseAuthDomain,
  projectId: config.firebaseProjectId,
  storageBucket: config.firebaseStorageBucket,
  messagingSenderId: config.firebaseMessagingSenderId,
  appId: config.firebaseAppId,
  measurementId: config.firebaseMeasurementId,
}

const app = initializeApp(firebaseConfig)

export const firestore = getFirestore(app)
