import React from 'react'
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
  return (
    <Card key={product._id} className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`} >
            <Card.Img src={product.image} varient="top" />
        </Link>
    

    <Card.Body>
      
        <Card.Title as='div' color='dark'>
          <h5>{product.name} </h5>
        </Card.Title>
      

      <Card.Text as='div'>
        <Rating value={product.rating} text={`${product.numReviews} viewers` } color={'yellow'} />
      </Card.Text>

      <Card.Text as='h1'>
         ${product.price}
      </Card.Text>

    </Card.Body>
    </Card>

  )
}

export default Product;