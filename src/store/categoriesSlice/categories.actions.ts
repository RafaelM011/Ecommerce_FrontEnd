import { type CategoryData, type ReduxAction } from '../../app.types'
import { type Dispatch, type AnyAction } from 'redux'
import { getDataFromDatabase } from '../../utils/firebase/firebase.utils'
import { createAction } from '../../utils/redux/redux.utils'
import { CATEGORIES_ACTION_TYPES } from './categories.types'

export const fetCategoriesStart = (): ReduxAction => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_RESOLVED)
}
export const fetCategoriesResolved = (data: CategoryData[]): ReduxAction => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_RESOLVED, data)
}

export const fetCategoriesRejected = (error: string): ReduxAction => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_RESOLVED, error)
}

const thunkAction = async (dispatch: Dispatch): Promise<void> => {
  dispatch(fetCategoriesStart())

  try {
    const data = await getDataFromDatabase()
    dispatch(fetCategoriesResolved(data))
  } catch (err) {
    dispatch(fetCategoriesRejected(err as string))
  }
}
thunkAction.type = 'thunkAction'

export const fetchCaterogiesAsync = (): AnyAction => thunkAction
