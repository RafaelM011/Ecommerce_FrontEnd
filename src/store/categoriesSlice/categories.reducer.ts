import { type CategoryData } from '../../app.types'
import { CATEGORIES_ACTION_TYPES, type CategoriesActions } from './categories.types'

type CategoryState = CategoryData[]
const CATEGORIES_INITIAL_STATE: CategoryState = []

export const categoriesReducer = (state: CategoryState = CATEGORIES_INITIAL_STATE, action: CategoriesActions): CategoryState => {
  const { type, payload } = action

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CURRENT_CATEGORIES:
      return payload
    default:
      return state
  }
}
