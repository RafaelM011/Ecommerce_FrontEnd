import { createContext, useState } from 'react'
import { type CartElement } from '../../app.types'

interface Props {
  children: JSX.Element
}

interface ICartContext {
  cartElements: Map<number, CartElement>
  handleAddToCart: (product: CartElement) => void
  handleQuantity: (product: CartElement, value: number) => void
  handleRemove: (product: CartElement) => void
}

export const CartContext = createContext<ICartContext>({
  cartElements: new Map<number, CartElement>(),
  handleAddToCart: () => null,
  handleQuantity: () => null,
  handleRemove: () => null
})

export const CartProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [cartElements, setCartElements] = useState(new Map<number, CartElement>())

  const handleAddToCart = (product: CartElement): void => {
    const { id } = product
    setCartElements(prevMap => {
      const newMap = new Map(prevMap)
      if (newMap.has(id)) {
        const quantity = newMap.get(id)?.quantity ?? 1
        newMap.set(id, {
          ...product,
          quantity: quantity + 1
        })
      } else {
        newMap.set(id, {
          ...product,
          quantity: 1
        })
      }
      return newMap
    })
  }

  const handleQuantity = (product: CartElement, value: number): void => {
    const { id, quantity } = product

    if (quantity + value === 0) handleRemove(product)
    else {
      setCartElements(prevMap => {
        const newMap = new Map(prevMap)
        newMap.set(id, {
          ...product,
          quantity: quantity + value
        })

        return newMap
      })
    }
  }

  const handleRemove = (product: CartElement): void => {
    const { id } = product
    setCartElements(prevMap => {
      const newMap = new Map(prevMap)
      newMap.delete(id)
      return newMap
    })
  }

  const value = {
    cartElements,
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
