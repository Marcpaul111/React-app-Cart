import React, {useContext} from 'react'
import { ShopContext } from '../shop/ShopContext';

export const CartItem = (props) => {
    const {id, price, productName, productImage} = props.data;
    const { removeCartItem, addToCart, cartItems, updateItemAmount } = useContext(ShopContext);

  return (
    <div className='cartItem'>
        <img src={productImage} alt="" />
        <div className="description">

            <p> <b> {productName} </b> </p>

            <p> ${price} </p>

            <div className="countHandler">
                <button onClick={() => removeCartItem(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e) => updateItemAmount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>

        </div>
        
    </div>
  )
}
