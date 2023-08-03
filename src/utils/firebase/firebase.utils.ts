// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  type UserCredential
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  type DocumentData,
  type DocumentReference
} from 'firebase/firestore'
import { type UserAuth } from '../../app.types'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDWmPyaRhRvQG_YATXCN-WFSKiDHCoQOIo',
  authDomain: 'ecommerce-db-a6e0f.firebaseapp.com',
  projectId: 'ecommerce-db-a6e0f',
  storageBucket: 'ecommerce-db-a6e0f.appspot.com',
  messagingSenderId: '750179994621',
  appId: '1:750179994621:web:bafc42c18ef431d2db6794'
}

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const firebaseApp = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopUp = async (): Promise<UserCredential> => await signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth: UserAuth): Promise<DocumentReference<DocumentData, DocumentData>> => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('Error creating the user', error)
    }
  }

  return userDocRef
}
