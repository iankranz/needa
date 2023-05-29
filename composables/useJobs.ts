import { collection, getDocs } from "firebase/firestore/lite"
import { useFirestore } from "./useFirestore"

type Job = {
  id: string
  company: string
}

export function useJobs() {
  const fireStore = useFirestore()
  const allJobs = ref<Job[]>([])

  async function getJobs() {
    const jobsCollection = collection(fireStore, "jobs")
    const jobsSnapshot = await getDocs(jobsCollection)
    const cityList = jobsSnapshot.docs.map((doc) => doc.data())
    return cityList
  }

  const test = getJobs()

  return { getJobs }
}
