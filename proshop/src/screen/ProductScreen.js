
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { DetailsProduct } from '../action/productList';
import Loader from '../components/loader';
import Message from '../components/message';
import Rating from '../components/Rating';


const ProductScreen = () => {

  const dispatch = useDispatch()

  //connect to reducer
  const productDetails = useSelector(state => state.productDetails)
  const {product, loading , error} = productDetails;

  const {id} = useParams();
  const nevigate = useNavigate();
  
  const [qty, setQty] = useState(0);

  useEffect(() => {
    dispatch(DetailsProduct(id))
  }, [dispatch]);

  const addToCartHandler = () => {
    nevigate(`/cart/${id}?qty=${qty}`)
  }
  
  return (
        <div>
            <Link className='btn btn-sm btn-light rounded sm my-3' to="/">
            go back
            </Link>
            {loading ? <Loader /> : error ? <Message /> :
            <Row> 
              <Col md={4} >
                <Image src={product.image} alt={product.name} fluid />
              </Col>
              <Col md={3} >
                <h3> {product.name} </h3>
                <ListGroup>
                  <ListGroup.Item varient='flush' >  
                      <Rating value={product.rating} text={`${product.numReviews} reviews`} color='yellow' />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    price : ${product.price}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    description: {product.description}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card >
                  <ListGroup varient='flush'>
                    <ListGroup.Item>
                     <Row>
                       <Col>
                         price
                       </Col>
                       <Col>
                         <strong>
                           $ {product.price}
                         </strong>
                       </Col>
                     </Row> 
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Row>
                       <Col>
                         Status
                       </Col>
                       <Col>
                         <strong>
                          {product.countInStock >0 ? "In Stock" : "Out of Stoke"}
                         </strong>
                       </Col>
                     </Row> 

                     {
                       product.countInStock > 0 && (
                       <ListGroup.Item>
                        <Row>
                          <Col>
                            Qty
                          </Col>
                          <Col>
                          <Form.Control as='select' value={qty} onChange = {e => {
                            setQty(e.target.value)
                          } }>
                            {
                              [...Array(product.countInStock).keys()].map(x => 
                              <option key={x+1} value={x+1} >
                                {x+1}
                              </option> 
                                )
                            }
                          </Form.Control>
                          </Col>
                        </Row>
                        </ListGroup.Item>
                        
                       )
                     }
                  
                        <ListGroup.Item>
                        <Row>
                       <Button onClick={addToCartHandler} className='btn' type='button' disabled={product.countInStock === 0 } >
                          add to cart
                        </Button>
                       </Row>
                        </ListGroup.Item>
                       
                     
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
            }
            

        </div> 
        
        
  )
}

export default ProductScreen;