import React, { ReactNode, useState } from 'react'

import { UserCredentials, UserInApp, UserSession } from '../entities'

interface ContextProps {
  isLoggedIn: boolean
  defaultLocation: null | string
  user: null | UserSession
  login: (
    user: UserInApp,
    userCredentials: UserCredentials,
    token: string
  ) => void
  setLocation: (location: string) => void
  logout: () => void
  isSubscribed?: boolean
}

let defaultState = {
  isLoggedIn: false,
  defaultLocation: null,
  user: null,
  login: () => {},
  setLocation: () => {},
  logout: () => {},
  isSubscribed: false,
}

if (window.localStorage.getItem('userData')) {
  const previousLoggin = JSON.parse(
    window.localStorage.getItem('userData') || ''
  )
  defaultState.isLoggedIn = true
  defaultState.user = previousLoggin
}

const UserContext = React.createContext<ContextProps>(defaultState)

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(defaultState.isLoggedIn)
  const [user, setUser] = useState<UserSession | null>(defaultState.user)
  const [defaultLocation, setDefaultLocation] = useState<string | null>(
    defaultState.defaultLocation
  )
  const [isSubscribed, setIsSubscribed] = useState(defaultState.isSubscribed)

  const login = (
    user: UserInApp,
    userCredentials: UserCredentials,
    token: string
  ) => {
    setIsLoggedIn(true)
    const userData: UserSession = {
      ...user,
      ...userCredentials,
      token,
    }
    setUser(userData)
    window.localStorage.setItem('userData', JSON.stringify(userData))
  }
  //TODO: Validate from back user is registered
  // const isSubscribed = ()=>{
  //   setIsSubscribed(true)
  // }

  const setLocation = (location: string) => {
    setDefaultLocation(location)
  }

  const logout = () => {
    window.localStorage.removeItem('userData')
    setIsLoggedIn(false)
    setUser(null)
    setIsSubscribed(false)
  }

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        user,
        defaultLocation,
        login,
        setLocation,
        logout,
        isSubscribed,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
export { UserProvider }
