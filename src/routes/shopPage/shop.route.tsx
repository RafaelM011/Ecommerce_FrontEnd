import { ProductCard } from '../../components/productCard/product_card.component'
import productsData from '../../mocks/shop-data.json'

const Shop: React.FC = (): JSX.Element => {
  return (
        <div className='flex flex-wrap gap-4'>
            {productsData.map(product => {
              return <ProductCard key={product.id} product={product}/>
            })}
        </div>
  )
}

export default Shop
