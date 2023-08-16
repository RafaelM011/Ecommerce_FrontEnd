import { type CategoryData } from '../../app.types'

export interface CategoriesActions {
  type: keyof typeof CATEGORIES_ACTION_TYPES
  payload: CategoryData[]
}

export const CATEGORIES_ACTION_TYPES = {
  SET_CURRENT_CATEGORIES: 'SET_CURRENT_CATEGORIES'
} as const
