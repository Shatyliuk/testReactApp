import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import NavCategory from './components/NavCategory';
import { Grid, FormGroup, FormControl } from 'react-bootstrap';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filter: false,
      products: [],
      filteredList: [],
      inputValue: '',
      isOpen: false,
      categories: []
    }
    this.updateValue = this.updateValue.bind(this);
    this.filterList = this.filterList.bind(this);
    this.openSidebar = this.openSidebar.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    await fetch("https://api.myjson.com/bins/10siqo")
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
  handleChange(category) {

    const updatedList = this.state.products.filter(item => {
        return category === 'All' ? -1 : item['bsr_category'] === category;
    });

    this.setState({
      filter: !(category === 'All'),
      filteredList: updatedList
    })
  }
  openSidebar(evt) {
    evt.preventDefault();

    if (evt.target.classList.contains('hamb') || evt.target.classList.contains('hamb__line')) {
      this.setState({
        isOpen: !this.state.isOpen
      })
      this.refs.hamb.classList.toggle('open')
      this.refs.aside.classList.toggle('open')
    }
  }
  render() {
    const products = this.state.filter ? this.state.filteredList : this.state.products;

    return (
      <div className="wrapper">
        <aside className="aside" ref='aside'>
          <NavCategory isOpen={this.state.isOpen} onChange={this.handleChange}></NavCategory>
        </aside>
        <Grid fluid={true}>
          <div className="">
            <button className="hamb" ref='hamb' onClick={this.openSidebar}>
              <span className="hamb__line"></span>
              <span className="hamb__line"></span>
              <span className="hamb__line"></span>
            </button>
          </div>
          <form onSubmit={this.filterList}>
            <FormGroup>
              <FormControl placeholder="Enter text" type="text" className="search-input" value={this.state.inputValue} onChange={this.updateValue}/>
            </FormGroup>
          </form> 
          <ProductList products={products}></ProductList>
        </Grid>
      </div>
      
      
    );
  }
}

export default App;
