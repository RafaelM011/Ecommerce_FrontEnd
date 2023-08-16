import { combineReducers } from 'redux'
import { userReducer } from './userSlice/user.reducer'
import { categoriesReducer } from './categoriesSlice/categories.reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer
})
