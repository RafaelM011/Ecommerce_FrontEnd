import { type CartElement } from '../../app.types'
import { CART_ACTION_TYPES, type CartActions } from './cart.types'

const CART_INITIAL_STATE = {
  cartElements: new Map<number, CartElement>(),
  isCartOpen: false
}

interface CartState {
  cartElements: Map<number, CartElement>
  isCartOpen: boolean
}

export const cartReducer = (state: CartState = CART_INITIAL_STATE, action: CartActions): CartState => {
  const { type, payload } = action

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART_OPEN:
      return { ...state, isCartOpen: payload as boolean }
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartElements: payload as Map<number, CartElement>
      }
    case CART_ACTION_TYPES.UPDATE_QUANTITY:
      return {
        ...state,
        cartElements: payload as Map<number, CartElement>
      }
    case CART_ACTION_TYPES.REMOVE_ITEM:
      return {
        ...state,
        cartElements: payload as Map<number, CartElement>
      }
    default:
      return state
  }
}
