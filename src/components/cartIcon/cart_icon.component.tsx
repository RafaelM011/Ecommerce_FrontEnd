import { type Product } from '../../app.types'

interface Props {
  quantity: number | undefined
  product: Product
}

export const CartIcon: React.FC<Props> = ({ quantity, product }): JSX.Element => {
  const { name, imageUrl, price } = product
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div className='w-full h-[80px] flex'>
      <div className='basis-3/12' style={style}></div>
      <div className='grow flex flex-col justify-center'>
        <h1 className='text-center font-bold'>{name}</h1>
        <h1 className='text-center font-bold'>{quantity} x ${price}</h1>
      </div>
    </div>
  )
}
