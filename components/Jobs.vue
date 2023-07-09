<template>
  <div v-for="job of jobs" :key="job.id" class="description">
    {{ `${job.title} - ${job.company}` }}
  </div>
</template>

<script lang="ts" setup>
const { jobs, createJob } = useJobs()
</script>

<style>
.description {
  color: #ffffff;
}
</style>
