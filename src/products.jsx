import React, { useContext } from 'react';
import '../src/pages/shop/shop.css';
import {ShopContext} from './pages/shop/ShopContext'

export const Products = (props) => {
    const {id, price, productName, productImage} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];
  return (
    <div className='product'>
        <img src={productImage} alt="" sizes={20}/>
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>Add to cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}</button>
    </div>
  )
}
