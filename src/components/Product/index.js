import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import './product.css'

class Product extends Component {
    
  render() {
    const {product} = this.props
    return (
      <div className="product">
        <h6>{product.name}</h6>
        <div>
          <a href={product.link}>
            <img src={product.img} alt={product.name}></img>
          </a>
          <ListGroup>
            <ListGroupItem className="list__item">Brand: {product.brand}</ListGroupItem>
            <ListGroupItem className="list__item">Category: {product.bsr_category}</ListGroupItem>
            <ListGroupItem className="list__item">Stars: {product.stars}</ListGroupItem>
            <ListGroupItem className="list__item">Weigth: {product.weight}</ListGroupItem>
            <ListGroupItem className="list__item">Price: {product.price}, {product.currency}</ListGroupItem>
          </ListGroup>
        </div>
      </div>
    );
  }
}
export default Product;
  