import React, { useState } from 'react';

import { CardsView } from '../CardsView';
import { ListView } from '../ListView';
import { IconSwitch } from '../common/IconSwitch';

import { PRODUCTS } from '../../data';

export const Store = () => {
  const [viewStyle, setViewStyle] = useState(0);
  const iconViews = ['view_list', 'view_module'];
  const goodsViews = ['cards', 'list'];

  const onSwitchHendler = () => {
    setViewStyle((viewStyle) => (viewStyle ? 0 : 1));
  };
  return (
    <div className='mt-5'>
      <h2 className='mb-3'>SHOP</h2>
      <div className='mb-3 d-flex justify-content-end'>
        <IconSwitch icon={iconViews[viewStyle]} onSwitch={onSwitchHendler} />
      </div>
      {goodsViews[viewStyle] === 'cards' ? <CardsView cards={PRODUCTS} /> : <ListView items={PRODUCTS} />}
    </div>
  );
};
