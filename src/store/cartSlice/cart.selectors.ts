import { type CartElement, type StoreState } from '../../app.types'

export const selectIsCartOpen = (state: StoreState): boolean => state.cart.isCartOpen
export const selectCartItems = (state: StoreState): Map<number, CartElement> => state.cart.cartElements
