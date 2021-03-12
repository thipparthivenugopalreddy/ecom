import React,{ useEffect, useState} from "react"

import {Link} from "react-router-dom"

import { Row, Col, Image, ListGroup, Button, Card} from "react-bootstrap"

import Ratings from "../components/Rating"

import axios from "axios"

const ProductScreen=({match})=>{

const [product,setProduct]=useState([])

useEffect(()=>{
  async function fetchProduct(){
    const {data} = await axios.get(`/api/products/${match.params.id}`)

    setProduct(data)

  }
  fetchProduct()
},[])

  return (
    <div>
    <Link to="/" className="btn btn-light my-3"> Go Back </Link>
      <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid/>

        </Col>

        <Col md={3}>

              <ListGroup variant="flush">

                <ListGroup.Item >
                  {product.name}
                </ListGroup.Item>


                <ListGroup.Item >
                    <Ratings value={product.rating} text={`${product.numReviews} reviews` } color={'gold'}/>
                </ListGroup.Item>

                <ListGroup.Item >
                    Price: ${product.price}
                </ListGroup.Item>

                <ListGroup.Item  variant="flush">
                    Description: {product.description}
                </ListGroup.Item>


              </ListGroup>
        </Col>

        <Col md={3}>
          <Card>

          <ListGroup >
              <ListGroup.Item variant="flush">
                <Row>
                  <Col>Price</Col>
                  <Col>{product.price} </Col>
                </Row>

              </ListGroup.Item>
                <ListGroup.Item>
              <Row>
                <Col>Status</Col>
                <Col>{product.countInStock > 0 ? 'Instock' : 'Out of Stock'}</Col>
              </Row>
              </ListGroup.Item>


              <ListGroup.Item>
            <Row>
              <Button className="btn-block" disabled={product.countInStock==0} type="button"> Add to Cart</Button>
            </Row>
            </ListGroup.Item>


          </ListGroup>

           </Card>
        </Col>
      </Row>
    </div>
  )
}


export default ProductScreen
