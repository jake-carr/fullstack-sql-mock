import React from 'react';
import Product from './Product';

const ProductList = (props) => {
  const {products, select, fetch} = props;

   return(
    <div className='product-list'>
      <h4>Product List</h4>
      {products.map((p, i) => {
        return <Product key={i} idx={i} id={p.id} item={p.item} curr_bid={p.curr_bid} min_cost={p.min_cost} img={p.img} ends_in={p.ends_in} select={select} fetch={fetch}/>
      })}
    </div>
  )
}

export default ProductList