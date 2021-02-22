import React from 'react';

const Product = (props) => {
  const { id, curr_bid, ends_in, min_cost, item, img, select, fetch, idx } = props;

  const choose = (i) => {
    select(i);
    fetch();
  }

  return (
    <div className='product-list-entry' onClick={() => choose(idx)}>
      <span>Name: {item} • </span>
      <span>Current bid: ${curr_bid} • </span>
      <span>Ends in: {ends_in} hours</span>
    </div>
  )
}

export default Product