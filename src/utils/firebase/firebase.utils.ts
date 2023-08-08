// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type UserCredential,
  type Unsubscribe,
  type NextOrObserver,
  type User
  // type Unsubscribe,
  // type NextOrObserver,
  // type User
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  type DocumentData,
  type DocumentReference
} from 'firebase/firestore'
import { type UserData } from '../../app.types'

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
const app = initializeApp(firebaseConfig)

// AUTHENTICATION SETUP
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInUserWithEmailAndPassword = async ({ email, password }: UserData): Promise<UserCredential> => await signInWithEmailAndPassword(auth, email, password)
export const signInWithGooglePopUp = async (): Promise<UserCredential> => await signInWithPopup(auth, provider)
// CAN CREATE AUTH USERS WITH SAME EMAIL REGARDLESS OF REGISTERED ON DB
export const createAuthUserWithEmailAndPassword = async ({ email, password }: UserData): Promise<UserCredential> => await createUserWithEmailAndPassword(auth, email, password)
export const signOutUser = async (): Promise<void> => { await signOut(auth) }
export const handleAuthStateChange = (callback: NextOrObserver<User>): Unsubscribe => onAuthStateChanged(auth, callback)

// DATABASE SETUP
export const db = getFirestore(app)

export const createUserDocumentFromAuth = async (userAuth: User): Promise<DocumentReference<DocumentData, DocumentData>> => {
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
