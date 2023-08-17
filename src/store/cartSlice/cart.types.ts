import { type CartElement } from '../../app.types'

export const CART_ACTION_TYPES = {
  TOGGLE_CART_OPEN: 'TOGGLE_CART_OPEN',
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  REMOVE_ITEM: 'REMOVE_ITEM'
} as const

export interface CartActions {
  type: keyof typeof CART_ACTION_TYPES
  payload: boolean | Map<number, CartElement>
}
