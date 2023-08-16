import { createStore } from 'redux'
import { rootReducer } from './root_reducer'

export const store = createStore(rootReducer)

// CREATE STORE IS DEPRECATED ON THIS VERSION
