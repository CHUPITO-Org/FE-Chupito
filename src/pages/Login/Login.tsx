import { useState } from 'react'
import { useParams } from 'react-router-dom'

import Login from '../../components/Login/Login'
import { Authentication } from '../../shared/api'
import EventsApi from '../../api/events'

export default function LoginPage(): JSX.Element {
  const [loading, setLoading] = useState(false)
  const [state] = useState('')
  const [redirectURL] = useState(null)
  const { id } = useParams<{ id: string }>() as { id: string }

  const api = Authentication()

  const handleLoginClicked = async (
    userName: string,
    password: string,
    callback: () => void
  ) => {
    setLoading(true)
    try {
      const result = await api.login({ email: userName, password })
      const resultToken = await result.user.getIdToken()
      setLoading(false)
      window.localStorage.setItem('token', JSON.stringify(resultToken))
      callback()

      if (redirectURL && state) {
        const completeURL = `${redirectURL}?state=${state}&code=`
        window.location.href = completeURL
      }
      const eventsApi = new EventsApi()
      eventsApi.addAttendees(id, { email: userName, password })
    } catch (err) {
      console.error(err)
    }
  }

  return <Login onLogin={handleLoginClicked} loading={loading} />
}
