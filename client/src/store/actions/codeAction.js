import { GET_CODES } from '../types'

export const getCodes = () => {
    return (dispatch) => {
        dispatch({
            type: GET_CODES
        })
    }
}
