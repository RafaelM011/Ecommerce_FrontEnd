import { useContext } from 'react'
import { ProductCard } from '../../components/productCard/product_card.component'
import { ProductsContext } from '../../context/products/products.context'

const Shop: React.FC = (): JSX.Element => {
  const products = useContext(ProductsContext)

  return (
        <div className='flex flex-col flex-wrap gap-4'>
            {products.map(product => {
              return (
                <div key={product.title}>
                  <h1 className='text-4xl font-bold text-center my-8 cursor-pointer'> {product.title}</h1>
                  <div className='flex gap-4'>
                    {product.items.slice(0, 4).map(item => <ProductCard key={item.id} product={item}/>)}
                  </div>
                </div>
              )
            })}
        </div>
  )
}

export default Shop
