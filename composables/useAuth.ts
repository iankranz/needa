import { signInWithEmailAndPassword, User, Auth } from "firebase/auth"
import { loadingFirebase } from "~/plugins/firebase.client"

const user = ref<User | null>(null)
const isLoadingAuth = ref(true)

export function useAuth() {
  const { $firebaseAuth } = useNuxtApp()

  watch(
    loadingFirebase,
    loading => {
      if (loading || !$firebaseAuth) return
      $firebaseAuth.onAuthStateChanged(() => {
        user.value = $firebaseAuth.currentUser
        isLoadingAuth.value = false
      })
    },
    { immediate: true }
  )

  async function signIn(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        $firebaseAuth,
        email,
        password
      )
      user.value = userCredential.user
    } catch (e) {
      alert(e)
    }
  }

  async function signOut() {
    try {
      await $firebaseAuth.signOut()
    } catch (e) {
      console.error(e)
    }
  }

  return { user, isLoadingAuth, signIn, signOut }
}
