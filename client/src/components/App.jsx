import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      view: 0,
      query: '',
    }
    this.changeView = this.changeView.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  changeView(i) {
    this.setState({view: i})
  }

  handleSearchInput(e) {
    this.setState({ query: e.target.value })
  }

  handleSearch() {
    // case insensitive filter
    let searchResult = this.state.products.filter(p => p.item.toUpperCase().includes(this.state.query.toUpperCase()))

    if (!searchResult.length) {
      alert('no items returned from that search');
      this.getProducts();
    } else {
      this.setState({products: searchResult})
    }
  }

  getProducts() {
    axios.get('/api/products')
      .then((res) => {
        this.setState({products: res.data})
      })
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {

    return(
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInput={this.handleSearchInput} go={this.handleSearch} />

          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer products={this.state.products} view={this.state.view} fetch={this.getProducts}/>
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList products={this.state.products} select={this.changeView} fetch={this.getProducts} />
          </div>
        </div>
      </div>
    )
  }
}