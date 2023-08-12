import { createContext, useState, useEffect } from 'react'
import { type CategoryData } from '../../app.types'

import { getDataFromDatabase } from '../../utils/firebase/firebase.utils'

interface Props {
  children: JSX.Element
}

export const CategoriesContext = createContext<CategoryData[]>([])

export const ProductsProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [category, setCategory] = useState<CategoryData[]>([])

  useEffect(() => {
    getDataFromDatabase()
      .then(data => { setCategory(data) })
      .catch(err => { console.log(err) })
  }, [])

  return (
    <CategoriesContext.Provider value={category}>
      { children }
    </CategoriesContext.Provider>
  )
}
