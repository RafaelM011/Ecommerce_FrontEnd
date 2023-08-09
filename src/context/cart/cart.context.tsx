import { createContext, useState } from 'react'
import { type CartElement } from '../../app.types'

interface Props {
  children: JSX.Element
}

interface ICartContext {
  cartElements: Map<number, CartElement>
  setCartElements: React.Dispatch<React.SetStateAction<Map<number, CartElement>>>
}

export const CartContext = createContext<ICartContext>({
  cartElements: new Map<number, CartElement>(),
  setCartElements: () => null
})

export const CartProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [cartElements, setCartElements] = useState(new Map<number, CartElement>())
  const value = {
    cartElements,
    setCartElements
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
