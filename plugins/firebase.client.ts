import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    projectId: config.public.firebaseProjectId,
    authDomain: config.public.firebaseAuthDomain,
  }
  const firebaseApp = initializeApp(firebaseConfig, "needa-client")
  const firebaseAuth = getAuth(firebaseApp)

  return {
    provide: {
      firebaseApp,
      firebaseAuth,
    },
  }
})
