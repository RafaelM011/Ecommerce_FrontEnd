import { createContext, useState, useEffect } from 'react'
import { type CategoryData } from '../../app.types'

import { getDataFromDatabase } from '../../utils/firebase/firebase.utils'

interface Props {
  children: JSX.Element
}

export const CategoriesContext = createContext<CategoryData[]>([])

export const CategoriesProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [categories, setCategories] = useState<CategoryData[]>([])

  useEffect(() => {
    const text = async (): Promise<void> => {
      const data = await getDataFromDatabase()
      setCategories(data)
    }
    text()
  }, [])

  return (
    <CategoriesContext.Provider value={categories}>
      { children }
    </CategoriesContext.Provider>
  )
}
