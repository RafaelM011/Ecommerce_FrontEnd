import { type ReduxAction } from '../../app.types'
import { createAction } from '../../utils/redux/redux.utils'
import { USER_ACTION_TYPES } from './user.types'

export const setCurrentUser = (user: string | null): ReduxAction => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
}
