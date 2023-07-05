import { useReducer, ReactNode } from 'react'
import { AuthContext } from './AuthContext'
import { Authentication } from '../../shared/api'
import { reducer } from './AuthReducer'

type Props = {
  children: ReactNode
}
interface VerifyApiResponse {
  isAuth: boolean
  user: {} | null
}

export const AuthProvider = ({ children }: Props) => {
  let initialState = { isAuth: false, user: {} }
  const api = Authentication()

  const verifyUser = async () => {
    try {
      const { isAuth, user }: VerifyApiResponse = await api.verifyAuth()
      dispatch({
        type: 'UPDATE_IS_AUTH',
        payload: {
          isAuth,
          user,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AuthContext.Provider value={{ state, verifyUser }}>
      {children}
    </AuthContext.Provider>
  )
}
