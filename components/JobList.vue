<template>
  <div v-for="job of jobs" :key="job.id" class="description">
    {{ `${job.title} - ${job.company}` }}
  </div>
</template>

<script lang="ts" setup>
type Job = {
  id: string
  company: string
  title: string
}

const { data } = await useFetch("/api/jobs")

const jobs = computed(() => {
  return data.value as Job[]
})
</script>

<style>
.description {
  color: #ffffff;
}
</style>
