import { type CategoryData, type ReduxAction } from '../../app.types'
import { createAction } from '../../utils/redux/redux.utils'
import { CATEGORIES_ACTION_TYPES } from './categories.types'

export const setCategories = (data: CategoryData[]): ReduxAction => {
  return createAction(CATEGORIES_ACTION_TYPES.SET_CURRENT_CATEGORIES, data)
}
