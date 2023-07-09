import { collection, getDocs } from "firebase/firestore/lite"
import { firestore } from "../firebase"

export default defineEventHandler(event => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(
        "https://firestore.googleapis.com/v1/projects/needa-d30ce/databases/(default)/documents/jobs",
        { method: "GET" }
      )
      const data = await res.json()

      const documentData = data.documents.map(doc => {
        return {
          id: doc.name,
          title: doc.fields.title.stringValue,
          company: doc.fields.company.stringValue
        }
      })
      resolve(documentData)
    } catch {
      reject(null)
    }
  })
})
