<template>
  <input v-model="email" type="email" />
  <input v-model="password" type="password" />
  <button @click="signIn">Submit</button>
</template>
<script lang="ts" setup>
import { signInWithEmailAndPassword, User } from "firebase/auth"

const { $firebaseAuth } = useNuxtApp()

const email = ref("")
const password = ref("")
const user = ref<User | null>(null)

async function signIn() {
  console.log($firebaseAuth)
  signInWithEmailAndPassword($firebaseAuth, email.value, password.value)
    .then((userCredential) => {
      user.value = userCredential.user
      console.log(user.value)
    })
    .catch((error) => {
      alert(error.message)
    })
}
</script>
