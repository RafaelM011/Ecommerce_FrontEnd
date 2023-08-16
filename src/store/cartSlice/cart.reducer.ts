import { type CartElement } from '../../app.types'
import { CART_ACTION_TYPES, type CartActions } from './cart.actions'

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
  const newMap = new Map(state.cartElements)

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART_OPEN:
      if (typeof payload === 'boolean') return { ...state, isCartOpen: payload }
      return state
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      if (typeof payload === 'object') {
        const { product } = payload
        if (newMap.has(product.id)) {
          const quantity = newMap.get(product.id)?.quantity ?? 1
          newMap.set(product.id, {
            ...product,
            quantity: quantity + 1
          })
        } else {
          newMap.set(product.id, {
            ...product,
            quantity: 1
          })
        }
      }
      return {
        ...state,
        cartElements: newMap
      }
    case CART_ACTION_TYPES.UPDATE_QUANTITY:
      if (typeof payload === 'object' && payload.value !== undefined) {
        const { product, value } = payload
        newMap.set(product.id, {
          ...product,
          quantity: product.quantity + value
        })
      }
      return {
        ...state,
        cartElements: newMap
      }
    case CART_ACTION_TYPES.REMOVE_ITEM:
      if (typeof payload === 'object') {
        const { product } = payload
        newMap.delete(product.id)
      }
      return {
        ...state,
        cartElements: newMap
      }
    default:
      return state
  }
}
