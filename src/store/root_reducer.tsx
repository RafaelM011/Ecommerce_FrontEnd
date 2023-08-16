import { combineReducers } from 'redux'
import { userReducer } from './userSlice/user.reducer'

export const rootReducer = combineReducers({
  user: userReducer
})
