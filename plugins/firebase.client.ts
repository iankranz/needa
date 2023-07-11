import { initializeApp } from "firebase/app"
import { initializeAuth, browserLocalPersistence } from "firebase/auth"

export const loadingFirebase = ref(true)

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    projectId: config.public.firebaseProjectId,
    authDomain: config.public.firebaseAuthDomain
  }
  const firebaseApp = initializeApp(firebaseConfig, "needa-client")
  const firebaseAuth = initializeAuth(firebaseApp, {
    persistence: browserLocalPersistence
  })
  loadingFirebase.value = false

  return {
    provide: {
      firebaseApp,
      firebaseAuth
    }
  }
})
