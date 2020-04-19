import axios from 'axios'

import { GET_PORTFOLIOS } from '../types'

export const getPortfolios = () => {
  return async dispatch => {
    const getPortfolios = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_BACKEND_URL}/portfolios`
    })

    dispatch({
      type: GET_PORTFOLIOS,
      payload: {
        portfolios: getPortfolios.data.portfolios
      }
    })
  }
}
