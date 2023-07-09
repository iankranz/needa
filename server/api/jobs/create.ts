import {
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc
} from "firebase/firestore/lite"
import { firestore } from "../../firebase"
import {} from "firebase/auth"

export default defineEventHandler(event => {
  return new Promise(async (resolve, reject) => {
    try {
      const body = await readBody(event)
      const idToken = getRequestHeader(event, "Authorization")
      if (!idToken) {
        reject(null)
        return
      }
      const tempBody = {
        fields: {
          title: {
            stringValue: body.title
          },
          company: {
            stringValue: body.company
          }
        }
      }
      const res = await fetch(
        "https://firestore.googleapis.com/v1/projects/needa-d30ce/databases/(default)/documents/jobs",
        {
          method: "POST",
          headers: { Authorization: idToken },
          body: JSON.stringify(tempBody)
        }
      )
      const data = await res.json()
      resolve(data)
    } catch {
      reject(null)
    }
  })
})
