import { type ReduxAction } from '../../app.types'

export const createAction = (type: string, payload: unknown): ReduxAction => {
  return {
    type,
    payload
  }
}
