import { getIdToken } from "firebase/auth"

type Job = {
  id: string
  title?: string
  company?: string
}

export function useJobs() {
  const { $firebaseAuth } = useNuxtApp()

  const jobs = ref<Job[] | null>(null)
  useFetch("/api/jobs").then(res => {
    jobs.value = res.data.value as Job[]
  })

  async function createJob(job: Omit<Job, "id">) {
    const user = $firebaseAuth.currentUser
    if (!user) return
    const idToken = await getIdToken(user)
    $fetch("/api/jobs/create/", {
      method: "POST",
      headers: { Authorization: `Bearer ${idToken}` },
      body: { ...job }
    })
  }

  return { jobs, createJob }
}
