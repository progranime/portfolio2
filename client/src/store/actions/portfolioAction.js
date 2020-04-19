import axios from 'axios'

import { GET_PORTFOLIOS } from '../types'

export const getPortfolios = () => {
  return async dispatch => {
    const getPortfolios = await axios({
      method: 'get',
      url: `http://localhost:5000/api/portfolios`
    })

    dispatch({
      type: GET_PORTFOLIOS,
      payload: {
        portfolios: getPortfolios.data.portfolios
      }
    })
  }
}
