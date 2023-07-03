import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

import getFirebaseApp from '../backends/firebase'
import { Credentials } from '../../entities'

function Authentication() {
  const login = (credentials: Credentials) => {
    const auth = getAuth(getFirebaseApp())

    signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    ).then((userCredential) => {
      return userCredential.user
    })
    return signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    )
  }
  const verifyAuth = () => {
    //let isAuth = false
    const auth = getAuth(getFirebaseApp())
    return onAuthStateChanged(auth, () => {})
    // auth.onAuthStateChanged((user) => {
    //   if (user?.uid) {
    //     isAuth = true
    //   } else {
    //     isAuth = false
    //   }

    //   return isAuth
    // })
  }

  const logout = () => {
    const auth = getAuth(getFirebaseApp())
    return signOut(auth)
  }

  return {
    login,
    logout,
    verifyAuth,
  }
}

export default Authentication
