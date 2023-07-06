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
      function (resolve, reject) {
        const auth = getAuth(getFirebaseApp())
        auth.onAuthStateChanged(function (user) {
          if (user?.uid) {
            resolve({
              isAuth: true,
              userUid: user.uid,
              email: user.email as string,
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
