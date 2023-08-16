import { type StoreState } from '../../app.types'

export const selectCurrentUser = (state: StoreState): string | null => state.user.currentUser
