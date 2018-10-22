import React, { Component } from 'react';
import './product.css'

class Product extends Component {
    
    render() {
      const {product} = this.props
      return (
          <li className="list__item">
            <h2>{product.name}</h2>
            <div className='wrapper'>
              <a href={product.link}>
                <img src={product.img} alt={product.name}></img>
              </a>
              <ul>
                <li className="list__item">Brand: {product.brand}</li>
                <li className="list__item">Stars: {product.stars}</li>
                <li className="list__item">Weigth: {product.weight}</li>
                <li className="list__item">Price: {product.price}, {product.currency}</li>
              </ul>
            </div>
            
            
          
          </li>
      );
    }
  }
  
  export default Product;
  