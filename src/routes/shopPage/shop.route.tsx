import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { ProductCard } from '../../components/productCard/product_card.component'

import { selectCategories } from '../../store/categoriesSlice/categories.selector'

const Shop: React.FC = (): JSX.Element => {
  const categories = useSelector(selectCategories)

  return (
        <div className='flex flex-col flex-wrap gap-4'>
            {categories.map(category => {
              return (
                <div key={category.title}>
                  <Link to={`${category.title}`} state={category}> <h1 className='text-4xl font-bold text-center my-8 cursor-pointer'> {category.title}</h1> </Link>
                  <div className='flex flex-wrap justify-center gap-4'>
                    {category.items.slice(0, 4).map(product => <ProductCard key={product.id} product={product}/>)}
                  </div>
                </div>
              )
            })}
        </div>
  )
}

export default Shop
