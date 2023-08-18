import { type CategoryData, type StoreState } from '../../app.types'

export const selectCategories = (state: StoreState): CategoryData[] => state.categories.categories
