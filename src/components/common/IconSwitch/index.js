import React from 'react';

import { Button } from 'react-bootstrap';

import './index.scss';

export const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div>
      <Button className='switchBtn' onClick={onSwitch}>
        <span className='material-icons'>{icon}</span>
      </Button>
    </div>
  );
};
