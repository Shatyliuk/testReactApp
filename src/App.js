import React, { Component } from 'react';
import './App.css';
import Product from './components/Product'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filter: false,
      products: [],
      filteredList: [],
      inputValue: ''
    }
    this.updateValue = this.updateValue.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/10siqo")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          products: data.products
        })
      })
  }

  updateValue(evt) {
    this.setState({
      inputValue: evt.target.value
    })
  }
  filterList(event) {
    event.preventDefault();

    if (this.state.inputValue) {
      const updatedList = this.state.products.filter((item) => {
        return item.name.toLowerCase().includes(this.state.inputValue.toLocaleLowerCase())
      })

      this.setState({
        filter: true,
        filteredList: updatedList
      })
    } else {
      this.setState({
        filter: false,
        filteredList: []
      })
    }
  }

  render() {
    const products = this.state.filter ? this.state.filteredList : this.state.products;

    return (
      <div>
        <form onSubmit={this.filterList}>
          <input type="text" className="search-input" value={this.state.inputValue} onChange={this.updateValue}></input>
        </form>
        <ul className="list">
          {products.map((product) => {
            return <Product product={product} key={product.asin}></Product>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
