import { combineReducers } from 'redux'

import codeReducer from './codeReducer'
import portfolioReducer from './portfolioReducer'

const rootReducer = combineReducers({
    code: codeReducer,
    portfolio: portfolioReducer
})

export default rootReducer
