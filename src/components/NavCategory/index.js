import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-bootstrap';

class NavCategory extends Component {
  constructor(props) {
    super(props);

    this.filterListByCategory = this.filterListByCategory.bind(this);
  }
  categories = ['All', 'Home & Kitchen', 'Sports & Outdoors', 'Health & Personal Care', 'Baby Products'];

  filterListByCategory(event) {
    
    event.preventDefault();

    this.props.onChange.call(this, event.target.textContent);

  }
    
  render() {

    return (
      <Navbar fluid={true} className={this.props.isOpen ? 'open': 'close'}>
          {
            this.categories.map((category) => {
              return (
                <NavItem key={category} onClick={this.filterListByCategory}>{category}</NavItem>
              )
            })
          }
      </Navbar>
    );
  }
}
export default NavCategory;
  