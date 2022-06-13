import React from 'react';

import { Image, Button } from 'react-bootstrap';

import './index.scss';

export const ShopItem = ({ name, price, color, img }) => {
  return (
    <div className='shop-item'>
      <Image src={img} alt={name} className='shop-item-img' />
      <div className='shop-item-name'>{name}</div>
      <div className='shop-item-color'>{color}</div>
      <div className='shop-item-price'>{price}</div>
      <Button className='shop-item-btn'>add to card</Button>
    </div>
  );
};
