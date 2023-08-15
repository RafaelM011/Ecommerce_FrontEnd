import { createContext, useReducer, type Reducer } from 'react'
import { type CartElement } from '../../app.types'

const CART_INITIAL_STATE = {
  cartElements: new Map<number, CartElement>(),
  isCartOpen: false,
  toggleCartOpen: () => null,
  handleAddToCart: () => null,
  handleQuantity: () => null,
  handleRemove: () => null
}

const CART_ACTIONS = {
  TOGGLE_CART_OPEN: 'TOGGLE_CART_OPEN',
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  REMOVE_ITEM: 'REMOVE_ITEM'
} as const

interface Props {
  children: JSX.Element
}

interface CartActions {
  type: keyof typeof CART_ACTIONS
  payload?: boolean | { product: CartElement, value?: number }
}

interface CartState {
  cartElements: Map<number, CartElement>
  isCartOpen: boolean
}

interface ICartContext extends CartState {
  toggleCartOpen: (toFalse?: boolean) => void
  handleAddToCart: (product: CartElement) => void
  handleQuantity: (product: CartElement, value: number) => void
  handleRemove: (product: CartElement) => void
}

const cartReducer: Reducer<CartState, CartActions> = (prevState, action) => {
  const { type, payload } = action
  const newMap = new Map(prevState.cartElements)

  switch (type) {
    case 'TOGGLE_CART_OPEN':
      if (payload === true) {
        return {
          ...prevState,
          isCartOpen: false
        }
      }
      return {
        ...prevState,
        isCartOpen: !prevState.isCartOpen
      }
    case 'ADD_ITEM_TO_CART':
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
        ...prevState,
        cartElements: newMap
      }
    case 'UPDATE_QUANTITY':
      if (typeof payload === 'object' && payload.value !== undefined) {
        const { product, value } = payload
        newMap.set(product.id, {
          ...product,
          quantity: product.quantity + value
        })
      }
      return {
        ...prevState,
        cartElements: newMap
      }
    case 'REMOVE_ITEM':
      if (typeof payload === 'object') {
        const { product } = payload
        newMap.delete(product.id)
      }
      return {
        ...prevState,
        cartElements: newMap
      }
    default:
      return prevState
  }
}
export const CartContext = createContext<ICartContext>(CART_INITIAL_STATE)

export const CartProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

  const toggleCartOpen = (toFalse = false): void => {
    if (toFalse) { dispatch({ type: CART_ACTIONS.TOGGLE_CART_OPEN, payload: true }); return }
    dispatch({ type: CART_ACTIONS.TOGGLE_CART_OPEN })
  }

  const handleAddToCart = (product: CartElement): void => {
    dispatch({ type: CART_ACTIONS.ADD_ITEM_TO_CART, payload: { product } })
  }

  const handleQuantity = (product: CartElement, value: number): void => {
    if (product.quantity + value === 0) handleRemove(product)
    else dispatch({ type: 'UPDATE_QUANTITY', payload: { product, value } })
  }

  const handleRemove = (product: CartElement): void => {
    dispatch({ type: 'REMOVE_ITEM', payload: { product } })
  }

  const value = {
    cartElements: state.cartElements,
    isCartOpen: state.isCartOpen,
    toggleCartOpen,
    handleAddToCart,
    handleQuantity,
    handleRemove
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
