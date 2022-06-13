import React from 'react';

import { Button } from 'react-bootstrap';

import './index.scss';

export const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className='toolbar mb-3'>
      {filters.map((filter) => (
        <Button key={filter} variant={filter === selected ? 'primary' : 'secondary'} onClick={onSelectFilter}>
          {filter}
        </Button>
      ))}
    </div>
  );
};
