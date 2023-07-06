import { useReducer, ReactNode } from 'react'
import { AuthContext } from './AuthContext'
import { Authentication } from '../../shared/api'
import { reducer } from './AuthReducer'
import Users from '../../api/users'

type Props = {
  children: ReactNode
}
interface VerifyApiResponse {
  isAuth: boolean
  userUid: string
}

export const AuthProvider = ({ children }: Props) => {
  let initialState = { isAuth: false, userUid: '' }
  const api = Authentication()

  const verifyUser = async () => {
    try {
      const { isAuth, userUid }: VerifyApiResponse = await api.verifyAuth()
      dispatch({
        type: 'UPDATE_IS_AUTH',
        payload: {
          isAuth,
          userUid,
        },
      })
      if (isAuth) {
        getUserInfo(userUid)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const getUserInfo = async (userUid: string) => {
    const usersApi = new Users()

    try {
      const userResponse = await usersApi.getUserEventById(userUid)
      console.log('RESPONSE USER AUTH', userResponse)
    } catch (err) {
      console.log(err)
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AuthContext.Provider value={{ state, verifyUser }}>
      {children}
    </AuthContext.Provider>
  )
}
