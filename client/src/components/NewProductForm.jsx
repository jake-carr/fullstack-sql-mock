import React from 'react';
import axios from 'axios';

const NewProductForm = (props) => {
  const {fetch, username} = props;

  const [open, toggle] = React.useState(false);
  const [item, changeItem] = React.useState('');
  const [min_cost, changeMin] = React.useState('');
  const [ends_in, changeTime] = React.useState('');
  const [img, changeImg] = React.useState('');

  const handleChange = (e) => {
    if (e.target.name === 'item') {
      changeItem(e.target.value);
    }
    if (e.target.name === 'min_cost') {
      changeMin(e.target.value);
    }
    if (e.target.name === 'time') {
      changeTime(e.target.value);
    }
    if (e.target.name === 'img') {
      changeImg(e.target.value);
    }
  }

  const submit = () => {
    axios.post('/api/products', {
      item,
      min_cost,
      curr_bid: min_cost,
      ends_in,
      img
    })
      .then(() => {
        fetch();
        alert(`${username} successfuly posted ${item} to EBID`)
      })
  }

  return (
    <div>
      {open ?
        <div>
           <input onChange={handleChange} name='item' placeholder='item name' />
          <input onChange={handleChange} name='min_cost' placeholder='min bid $' />
          <input onChange={handleChange} name='time' placeholder='duration of posting' />
          <input onChange={handleChange} name='img' placeholder='image url' />
          <button onClick={() => submit()}>List This Product on EBID !!! </button>
        </div>
        : <button onClick={() => toggle(!open)}>Open Post Modal</button>
        }
    </div>
  )
}

export default NewProductForm