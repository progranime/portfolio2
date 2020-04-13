import { GET_PORTFOLIOS } from '../types'

export const getPortfolios = () => {
    return (dispatch) => {
        dispatch({
            type: GET_PORTFOLIOS
        })
    }
}
