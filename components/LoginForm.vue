<template>
  <label>Username</label>
  <input v-model="email" type="email" />
  <label>Password</label>
  <input v-model="password" type="password" />
  <button @click="handleSubmitClick">Submit</button>
</template>
<script lang="ts" setup>
import { useAuth } from "~/composables/useAuth"
const { signIn } = useAuth()

const email = ref("")
const password = ref("")

async function handleSubmitClick() {
  try {
    await signIn(email.value, password.value)
  } catch (e) {
    console.error(e)
  }
}
</script>
