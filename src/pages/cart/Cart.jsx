import React, { useContext } from 'react'
import { PRODUCTS } from '../../Products';
import { ShopContext } from '../shop/ShopContext';
import './cart.css';
import { CartItem } from './CartItem';
import {useNavigate} from 'react-router-dom';


export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalPrice = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>

      {totalPrice > 0 ? (
      <div className="checkout">
        <p>Subtotal: ${totalPrice}</p>
        <button onClick={() => navigate("/")}> Continue Shopping </button>
        <button> Checkout </button>
      </div>
      ) : (
        <h2>Your Cart is Empty</h2>
      )};
    </div>
  )
}
