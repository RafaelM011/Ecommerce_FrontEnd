import { type Product, type CartElement, type ReduxAction } from '../../app.types'
import { createAction } from '../../utils/redux/redux.utils'
import { CART_ACTION_TYPES } from './cart.types'

export const toggleIsCartOpen = (toggleState: boolean): ReduxAction => {
  return createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN, toggleState)
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
  return createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, newMap)
}

export const updateCartItemQuantity = (map: Map<number, CartElement>, product: Product, value: number): ReduxAction => {
  const newMap = new Map(map)
  const quantity = newMap.get(product.id)?.quantity ?? 1
  newMap.set(product.id, {
    ...product,
    quantity: quantity + value
  })
  return createAction(CART_ACTION_TYPES.UPDATE_QUANTITY, newMap)
}

export const removeCartItem = (map: Map<number, CartElement>, product: Product): ReduxAction => {
  const newMap = new Map(map)
  newMap.delete(product.id)
  return createAction(CART_ACTION_TYPES.REMOVE_ITEM, newMap)
}
