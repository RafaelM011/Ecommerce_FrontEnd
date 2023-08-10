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
          quantity: quantity + value,
          product
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
    <div className="w-10/12 h-fit mx-auto py-4 border-b-2 borded-black grid grid-flow-row grid-cols-5">
      <div className='w-[200px] h-[200px]' style={style}></div>
      <h1 className='m-auto text-xl'> {name} </h1>
      <div className='m-auto flex text-xl'>
        <span className='cursor-pointer' onClick={() => { handleQuantity(-1) }}> ❮ </span>
          <h1 className='mx-2'> {quantity} </h1>
        <span className='cursor-pointer' onClick={() => { handleQuantity(1) }}> ❯ </span>
      </div>
      <h1 className='m-auto text-xl'> ${price} </h1>
      <h1 className='m-auto text-xl cursor-pointer' onClick={handleRemove}> ❌ </h1>
    </div>
  )
}
