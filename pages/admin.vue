<template>
  <ClientOnly>
    <div v-if="isLoadingAuth">Loading...</div>
    <LoginForm v-else-if="!user" />
    <AdminNav v-else />
  </ClientOnly>
</template>

<script lang="ts" setup>
import LoginForm from "~/components/LoginForm.vue"
import { useAuth } from "~/composables/useAuth"
import AdminNav from "~/components/AdminNav.vue"

const { user, isLoadingAuth } = useAuth()
</script>
