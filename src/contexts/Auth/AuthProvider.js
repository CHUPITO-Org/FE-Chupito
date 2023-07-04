import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { Authentication } from '../../shared/api'
import { reducer } from './AuthReducer'

export const AuthProvider = ({ children }) => {
  const initialState = { isAuth: false, email: '', loadingIsAuth: true }
  const api = Authentication()

  const verifyUser = async () => {
    try {
      const verifyApiResponse = await api.verifyAuth()
      dispatch({
        type: 'UPDATE_IS_AUTH',
        payload: { isAuth: verifyApiResponse.isAuth },
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
