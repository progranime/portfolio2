import axios from 'axios'

import { GET_CODES } from '../types'

export const getCodes = () => {
  return async dispatch => {
    const getCodes = await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_BACKEND_URL}/codes`
    })

    dispatch({
      type: GET_CODES,
      payload: {
        codes: getCodes.data.codes
      }
    })
  }
}
