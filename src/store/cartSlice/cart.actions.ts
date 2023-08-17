import { type Product, type CartElement, type ReduxAction } from '../../app.types'
import { CART_ACTION_TYPES } from './cart.types'

export const toggleIsCartOpen = (toggleState: boolean): ReduxAction => {
  return { type: CART_ACTION_TYPES.TOGGLE_CART_OPEN, payload: toggleState }
}

export const addItemToCart = (map: Map<number, CartElement>, product: Product): ReduxAction => {
  const newMap = new Map(map)
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

  return { type: CART_ACTION_TYPES.ADD_ITEM_TO_CART, payload: newMap }
}

export const updateCartItemQuantity = (map: Map<number, CartElement>, product: Product, value: number): ReduxAction => {
  const newMap = new Map(map)
  const quantity = newMap.get(product.id)?.quantity ?? 1
  newMap.set(product.id, {
    ...product,
    quantity: quantity + value
  })
  return { type: CART_ACTION_TYPES.UPDATE_QUANTITY, payload: newMap }
}

export const removeCartItem = (map: Map<number, CartElement>, product: Product): ReduxAction => {
  const newMap = new Map(map)
  newMap.delete(product.id)
  return { type: CART_ACTION_TYPES.UPDATE_QUANTITY, payload: newMap }
}
