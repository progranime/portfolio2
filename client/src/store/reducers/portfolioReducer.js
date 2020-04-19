import { GET_PORTFOLIOS } from '../types'

const initialState = {
  portfolios: []
}

const portfolioReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PORTFOLIOS:
      return {
        ...state,
        ...payload
      }
    default:
      return {
        ...state
      }
  }
}

export default portfolioReducer
