import React from 'react';
import axios from 'axios';

export default class ProductViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bidding: false,
      bid: ''
    }
  }

  toggleBiddingMode() {
    this.setState({ bidding: !this.state.bidding })
  }

  handleChange(e) {
    this.setState({ bid: e.target.value })
  }
  makeBid() {
    let n = Number(this.state.bid)
    let itemname = this.props.products[this.props.view].item;
    let min = this.props.products[this.props.view].min_cost;
    let curr = this.props.products[this.props.view].curr_bid;
    let id = this.props.products[this.props.view].id;

    if (n) {
      // if n > curr_bid & > min_cost
      if (n > curr && n > min) {
        // axios.put, re render, then alert succes
        axios.put(`/api/products/${id}`, {
          curr_bid: n
        })
          .then(() => {
            this.props.fetch();
            alert(`placed a bid of ${n} for ${itemname}`)
          })

      } else {
        alert('illegal bid')
      }
    } else {
      alert('bid has to be a number')
    }
  }

  render() {
    return (
      <div className='product-viewer'>
        {this.props.products.length ?
          <div>
            <h4>Product Viewer</h4>
            <span>IMAGE
            <img src={this.props.products[this.props.view].img}></img>
            </span>
            <span>NAME: {this.props.products[this.props.view].item}</span>
            <span>MIN cost: {this.props.products[this.props.view].min_cost}</span>
            <span>CURRENT bid: {this.props.products[this.props.view].curr_bid}</span>
            <button onClick={() => this.toggleBiddingMode()}>toggle bidding form</button>
            {this.state.bidding ?
              <div>
                  <input onChange={this.handleChange.bind(this)} />
                  <button onClick={() => this.makeBid()}>MAKE THIS BID</button>
              </div> : null}
            <span>ENDS in: {this.props.products[this.props.view].ends_in}</span>
          </div> : null}
      </div>
    )
  }
}