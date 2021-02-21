import React from 'react';

const Product = (props) => {
  const { id, curr_bid, ends_in, min_cost, item, img, select, fetch, idx } = props;

  const choose = (i) => {
    select(i);
    fetch();
  }

  return (
    <div className='product-list-entry' onClick={() => choose(idx)}>
      <span>NAME: {item}</span>
      <span>ENDS in: {ends_in}</span>
    </div>
  )
}

export default Product