import React from 'react'
import './shop.css';
import { PRODUCTS } from '../../Products';
import { Products } from '../../products.jsx';

export const Shop = () => {
  return (
    <div className='shop' >
      <div className="shopTitle">
        <h1>Marco Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => 
        <Products data={product}/> )}
      </div>
    </div>
  )
}
