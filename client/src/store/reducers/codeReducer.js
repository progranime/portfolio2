import { GET_CODES } from '../types'

const initialState = {
  codes: []
}

const codeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CODES:
      return {
        ...state,
        ...payload
      }
    default:
      return { ...state }
  }
}

export default codeReducer
