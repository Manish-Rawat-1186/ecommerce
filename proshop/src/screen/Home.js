import React , { useEffect } from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { listProduct } from '../action/productList';
import Loader from '../components/loader';
import Message from '../components/message';
import Product from '../components/Product';




const Home = () => {
 
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList)
  const {loading, error,products} = productList

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch])

  return (<>
    <Container>
     {loading ? (
       <h3>
        <Loader />
       </h3>
     ): 
     error ? (
       <h2>
         <Message />
       </h2>
     ):(<Row>
        <h1>Latest Products</h1>
           {products.map((product) => (
               <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                    <Product product={product}  />
               </Col>
           ))}
        </Row>) }
    </Container>
    </>
  )
}

export default Home