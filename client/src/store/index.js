import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer'

const middleware = [thunk]

const store = createStore(
    rootReducer,
    compose(composeWithDevTools(applyMiddleware(...middleware)))
)

export default store
