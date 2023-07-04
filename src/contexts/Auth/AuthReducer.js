export const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_IS_AUTH':
      return { ...state, isAuth: action.payload.isAuth }

    default:
      return state
  }
}
