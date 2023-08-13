import { useContext } from 'react'
import { type Product } from '../../app.types'
import { CartContext } from '../../context/cart/cart.context'

interface Props {
  quantity: number
  product: Product
}

export const CheckoutItem: React.FC<Props> = ({ quantity, product }): JSX.Element => {
  const { setCartElements } = useContext(CartContext)
  const { id, name, imageUrl, price } = product
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  const handleQuantity = (value: number): void => {
    if (quantity + value === 0) handleRemove()
    else {
      setCartElements(prevMap => {
        const newMap = new Map(prevMap)
        newMap.set(id, {
          ...product,
          quantity: quantity + value
        })

        return newMap
      })
    }
  }

  const handleRemove = (): void => {
    setCartElements(prevMap => {
      const newMap = new Map(prevMap)
      newMap.delete(id)
      return newMap
    })
  }

  return (
    <div className="w-12/12 max-w-[800px] h-[200px] mx-auto py-4 border-b-2 borded-black flex gap-4 justify-between">
      <div className='h-[150px] w-[80px] sm:w-[150px] m-auto' style={style}></div>
      <h1 className='m-auto text-center text-xs sm:text-base md:text-lg grow'> {name} </h1>
      <div className='m-auto flex justify-center text-xs sm:text-base md:text-lg grow'>
        <span className='cursor-pointer' onClick={() => { handleQuantity(-1) }}> ❮ </span>
          <h1 className='mx-2'> {quantity} </h1>
        <span className='cursor-pointer' onClick={() => { handleQuantity(1) }}> ❯ </span>
      </div>
      <h1 className='m-auto text-xs sm:text-base md:text-lg grow text-center'> ${price} </h1>
      <h1 className='m-auto text-xs sm:text-base md:text-lg cursor-pointer grow text-end' onClick={handleRemove}> ❌ </h1>
    </div>
  )
}
