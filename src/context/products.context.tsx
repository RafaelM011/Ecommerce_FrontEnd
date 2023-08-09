import { createContext, useState } from 'react'
import { type Product } from '../app.types'
import productsData from '../mocks/shop-data.json'

interface Props {
  children: JSX.Element
}

export const ProductsContext = createContext<Product[]>([])

export const ProductsProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [products] = useState<Product[]>(productsData)

  return (
    <ProductsContext.Provider value={products}>
      { children }
    </ProductsContext.Provider>
  )
}
