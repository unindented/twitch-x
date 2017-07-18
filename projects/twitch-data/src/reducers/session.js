const initialState = {token: null}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOGIN':
      return {token: action.payload}
  }

  return state
}
