import React from 'react';
import { Image } from 'react-bootstrap';

import './index.scss';

export const MasonryImg = ({ img, category }) => {
  return <Image fluid={true} src={img} alt={category} className='masonry-img' />;
};
