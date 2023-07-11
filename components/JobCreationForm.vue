<template>
  <label>title</label>
  <input v-model="title" />
  <label>company</label>
  <input v-model="company" />
  <button @click="handleCreateClick">create job</button>
</template>

<script lang="ts" setup>
const { createJob } = useJobs()

const title = ref("")
const company = ref("")

function handleCreateClick() {
  createJob({ title: title.value, company: company.value })
}
</script>
