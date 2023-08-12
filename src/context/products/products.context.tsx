import { createContext, useState, useEffect } from 'react'
import { type CategoryData } from '../../app.types'

import { getDataFromDatabase } from '../../utils/firebase/firebase.utils'

interface Props {
  children: JSX.Element
}

export const ProductsContext = createContext<CategoryData[]>([])

export const ProductsProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [products, setProducts] = useState<CategoryData[]>([])

  useEffect(() => {
    getDataFromDatabase()
      .then(data => { setProducts(data) })
      .catch(err => { console.log(err) })
  }, [])

  return (
    <ProductsContext.Provider value={products}>
      { children }
    </ProductsContext.Provider>
  )
}
