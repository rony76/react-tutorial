import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import menuReducer from './reducers/menuReducer'

export default createStore(menuReducer, null, applyMiddleware(logger))
