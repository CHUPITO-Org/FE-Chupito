type State = {
  isAuth: boolean
  user: {} | null
}
type Action = {
  type: 'UPDATE_IS_AUTH'
  payload: { isAuth: boolean; user: {} | null }
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'UPDATE_IS_AUTH':
      const { isAuth, user } = action.payload
      return {
        ...state,
        isAuth,
        user,
      }

    default:
      return state
  }
}
