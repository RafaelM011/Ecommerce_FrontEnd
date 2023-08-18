import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './root_reducer'
import thunk from 'redux-thunk'

const middleWare = [thunk]

export const store = createStore(rootReducer, undefined, applyMiddleware(...middleWare))

// CREATE STORE IS DEPRECATED ON THIS VERSION
