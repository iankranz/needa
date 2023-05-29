import { collection, getDocs } from "firebase/firestore/lite"
import { firestore } from "../lib/firebase"

export default defineEventHandler((event) => {
  const jobsCol = collection(firestore, "jobs")

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
