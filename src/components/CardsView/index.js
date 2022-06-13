import React from 'react';

import { ShopCard } from '../ShopCard';

export const CardsView = ({ cards }) => {
  return (
    <div className='row'>
      {cards.map((card, index) => (
        <ShopCard key={index} {...card} />
      ))}
    </div>
  );
};
