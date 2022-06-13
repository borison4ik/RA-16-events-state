import React from 'react';

import { ShopItem } from '../ShopItem';

export const ListView = ({ items }) => {
  return (
    <div className='row list-view'>
      {items.map((item, index) => (
        <ShopItem key={index} {...item} />
      ))}
    </div>
  );
};
