type Job = {
  id: string
  title?: string
  company?: string
}

export function useJobs() {
  const jobs = ref<Job[] | null>(null)
  useFetch("/api/jobs").then((res) => {
    jobs.value = res.data.value as Job[]
  })
  return { jobs }
}
