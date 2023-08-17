import { type ReduxAction } from '../../app.types'

export const createAction = ({ type, payload }: ReduxAction): ReduxAction => {
  return {
    type,
    payload
  }
}
