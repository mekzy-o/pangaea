import React, {useState} from 'react';
import {Container, ProductDetails} from './styles';

const CartCard = ({title, image, count, price, totalCost, cart, setCart, exchangeRate}) => {
  const [show, setShow] = useState(false);

  const increment = () => {
      setCart(cart.map((item) => {
          if(item.label === title){
              return {
                  ...item,
                  count: count+1,
                  totalCost: (count+1) * price
              }
          }
          return item;
        }))
  }

  const decrement = () => {
    if(count <= 1) {
        return setCart(cart.filter((item) => item.label !== title))
    }
    setCart(cart.map((item) => {
        if(item.label === title){
            return {
                ...item,
                count: count-1,
                totalCost: (count-1) * price
            }
        }
        return item;
      }))
}

 return (
    <Container>
        <ProductDetails>
        <p className='product-title'>{title}</p>
            <div className='product-count'>
                <button onClick={decrement}>-</button>
                <input type='text' value={count} readOnly/>
                <button onClick={increment}>+</button>
            </div>
        </ProductDetails>
        <p className='money-box'>{exchangeRate} {totalCost}</p>
        <p className='image-box'>
            <img src={image} alt='product'/>
         </p>
         <p onClick={() => setShow(!show)}>X</p>
    </Container>
 )

}

export default CartCard;