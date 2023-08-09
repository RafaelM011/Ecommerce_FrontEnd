import { useContext } from 'react'
import { ProductCard } from '../../components/productCard/product_card.component'
import { ProductsContext } from '../../context/products/products.context'

const Shop: React.FC = (): JSX.Element => {
  const products = useContext(ProductsContext)

  return (
        <div className='flex flex-wrap gap-4'>
            {products.map(product => {
              return <ProductCard key={product.id} product={product}/>
            })}
        </div>
  )
}

export default Shop
