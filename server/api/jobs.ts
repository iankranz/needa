import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore/lite"

export default defineEventHandler((event) => {
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
  const db = getFirestore(app)
  const jobsCol = collection(db, "jobs")

  return new Promise(async (resolve, reject) => {
    try {
      const jobSnapshot = await getDocs(jobsCol)
      const jobList = jobSnapshot.docs.map((doc) => doc.data())
      resolve(jobList)
    } catch {
      reject(null)
    }
  })
})
