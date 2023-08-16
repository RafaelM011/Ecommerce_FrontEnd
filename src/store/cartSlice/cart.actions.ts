import { type CartElement } from '../../app.types'

export const CART_ACTION_TYPES = {
  TOGGLE_CART_OPEN: 'TOGGLE_CART_OPEN',
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  REMOVE_ITEM: 'REMOVE_ITEM'
} as const

export interface CartActions {
  type: keyof typeof CART_ACTION_TYPES
  payload?: boolean | { product: CartElement, value?: number }
}

// export const toggleCartOpen = (toFalse = false): void => {
//   if (toFalse) { dispatch({ type: CART_ACTIONS.TOGGLE_CART_OPEN, payload: true }); return }
//   dispatch({ type: CART_ACTIONS.TOGGLE_CART_OPEN })
// }

// export const handleAddToCart = (product: CartElement): void => {
//   dispatch({ type: CART_ACTIONS.ADD_ITEM_TO_CART, payload: { product } })
// }

// export const handleQuantity = (product: CartElement, value: number): void => {
//   if (product.quantity + value === 0) handleRemove(product)
//   else dispatch({ type: 'UPDATE_QUANTITY', payload: { product, value } })
// }

// export const handleRemove = (product: CartElement): void => {
//   dispatch({ type: 'REMOVE_ITEM', payload: { product } })
// }
