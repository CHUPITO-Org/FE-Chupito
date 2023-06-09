import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

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
    return new Promise<{ isAuth: boolean; userUid: string; email: string }>(
      (resolve, reject) => {
        const auth = getAuth(getFirebaseApp())
        auth.onAuthStateChanged((user) => {
          const { uid, email } = user ?? {}
          if (uid) {
            resolve({
              isAuth: true,
              userUid: uid,
              email: email as string,
            })
          } else {
            reject({ isAuth: false, userUid: '', email: '' })
          }
        })
      }
    )
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
