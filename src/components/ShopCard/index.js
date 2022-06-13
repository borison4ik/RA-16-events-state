import React from 'react';
import { Card, Button } from 'react-bootstrap';

import './index.scss';

export const ShopCard = ({ name, price, color, img }) => {
  return (
    <Card style={{ width: '18rem' }} className='mb-3 card-item'>
      <Card.Img variant='top' src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{color}</Card.Text>
        <Card.Text>{price}$</Card.Text>
        <Button variant='primary'>Add to Card</Button>
      </Card.Body>
    </Card>
  );
};
