import React, { Component } from 'react';
import Product from '../Product';
import './productList.css'
import { Row, Col } from 'react-bootstrap';

class ProductList extends Component {
    
    render() {
      const {products} = this.props
      return (
        <Row className="df">
            {
              products.map((product) => {
                  return (
                    <Col sm={6} xs={12} md={4} key={product.asin}><Product product={product}></Product></Col>
                  )
                })
            }
        </Row>
      );
    }
  }
  
  export default ProductList;
  