import React, { useState, useEffect } from 'react';
import{ Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import axios from 'axios';

const Product = ({match}) => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = axios.get(`/api/products/${match.params.id}`);
            setProduct(data);
        }
          fetchProduct();
    }, []);
    
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <Rating value={product.rating} 
                    text={`${product.numReviews} reviews`} />
                </Card.Text>

                <Card.Text as='h3'>${product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
