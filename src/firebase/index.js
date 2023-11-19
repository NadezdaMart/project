import { initializeApp } from "firebase/app"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth"

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCjb3ipR18m_L-SrrvlJX1_hvwV64ELtNs",
  authDomain: "project-6e2a2.firebaseapp.com",
  projectId: "project-6e2a2",
  storageBucket: "project-6e2a2.appspot.com",
  messagingSenderId: "924990112985",
  appId: "1:924990112985:web:1ceecd87a3bafd7c606ac8",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export const getUserDoc = async ({ uid, email }) => {
  const userDoc = doc(db, `users/${uid}`)
  const userData = await getDoc(userDoc)

  if (userData.exists()) {
    return userDoc
  } else {
    const userDoc = await setDoc(doc(db, "users", uid), {
      expensesList: [],
      email,
    })

    return userDoc
  }
}

export const addExpenseToDB = async (uid, expensesList) => {
  const userDoc = doc(db, `users/${uid}`)

  let data

  try {
    data = await updateDoc(userDoc, "expenses", arrayUnion(expensesList))
  } catch (err) {
    console.log(err)
  }

  return data
}

export const getAllExpenses = async (uid) => {
  const userDoc = doc(db, `users/${uid}`)
  const userData = await getDoc(userDoc)

  return userData.data().expensesList
}

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: "select_account",
})

export const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider)
}

export const signInUser = (login, password) => {
  return signInWithEmailAndPassword(auth, login, password).then((userData) => {
    console.log("USER SIGN IN", userData)
    return userData
  })
}

export const registerUser = (login, password) => {
  return createUserWithEmailAndPassword(auth, login, password).then(
    (userData) => {
      console.log("USER REGISTERED", userData)
    }
  )
}

export const logout = () => {
  return signOut(auth).then(() => {
    console.log("USER IS LOGGED OUT")
  })
}

export const onAuthStateChangedMaker = () => {
  return () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("USER LOGGED IN", user)
      } else {
        console.log("USER LOGGED OUT", user)
      }
    })
  }
}

export const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}
