import { type CategoryData } from '../../app.types'
import { CATEGORIES_ACTION_TYPES, type CategoriesActions } from './categories.types'

interface CategoryState {
  categories: CategoryData[]
  isLoading: boolean
  error: string | null
}
const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null
}

export const categoriesReducer = (state: CategoryState = CATEGORIES_INITIAL_STATE, action: CategoriesActions): CategoryState => {
  const { type, payload } = action

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true }
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_RESOLVED:
      return { ...state, categories: payload as CategoryData[], isLoading: false }
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_REJECTED:
      return { ...state, error: payload as string, isLoading: false }
    default:
      return state
  }
}
