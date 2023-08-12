import { createContext, useState, useEffect } from 'react'
import { type Product } from '../../app.types'

import productsData from '../../mocks/shop-data.json'
import { getDataFromDatabase } from '../../utils/firebase/firebase.utils'

interface Props {
  children: JSX.Element
}

export const ProductsContext = createContext<Product[]>([])

export const ProductsProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [products] = useState<Product[]>(productsData)

  useEffect(() => {
    getDataFromDatabase()
      .then()
      .catch(err => { console.log(err) })
  }, [])

  return (
    <ProductsContext.Provider value={products}>
      { children }
    </ProductsContext.Provider>
  )
}
