<template>
  <h1 class="text-white">Welcome, admin!</h1>
  <ul>
    <li>Create New Job</li>
    <li>Search Jobs</li>
  </ul>
  <button @click="signOut" class="cursor-pointer">Logout</button>
</template>

<script lang="ts" setup>
import { useAuth } from "~/composables/useAuth"

const { signOut } = useAuth()
</script>
