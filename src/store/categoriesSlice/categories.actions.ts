import { type CategoryData, type ReduxAction } from '../../app.types'
import { CATEGORIES_ACTION_TYPES } from './categories.types'

export const setCategories = (data: CategoryData[]): ReduxAction => {
  return { type: CATEGORIES_ACTION_TYPES.SET_CURRENT_CATEGORIES, payload: data }
}
