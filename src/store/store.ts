import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './root_reducer'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleWare = [thunk]

export const store = createStore(persistedReducer, undefined, applyMiddleware(...middleWare))
export const persistor = persistStore(store)

// CREATE STORE IS DEPRECATED ON THIS VERSION
