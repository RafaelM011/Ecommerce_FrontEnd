import { type CategoryData } from '../../app.types'

export interface CategoriesActions {
  type: keyof typeof CATEGORIES_ACTION_TYPES
  payload: CategoryData[] | string
}

export const CATEGORIES_ACTION_TYPES = {
  FETCH_CATEGORIES_START: 'FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_RESOLVED: 'FETCH_CATEGORIES_RESOLVED',
  FETCH_CATEGORIES_REJECTED: 'FETCH_CATEGORIES_REJECTED'
} as const
