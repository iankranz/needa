<template>
  <ClientOnly>
    <Login />
    <div>title</div>
    <input v-model="title" />
    <div>company</div>
    <input v-model="company" />
    <button @click="handleCreateClick">create job</button>
  </ClientOnly>
</template>

<script lang="ts" setup>
const { createJob } = useJobs()

const title = ref("")
const company = ref("")

function handleCreateClick() {
  createJob({ title: title.value, company: company.value })
}
</script>
