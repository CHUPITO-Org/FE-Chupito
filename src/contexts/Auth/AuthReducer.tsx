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
      return {
        ...state,
        isAuth: action.payload.isAuth,
        user: action.payload.user,
      }

    default:
      return state
  }
}
