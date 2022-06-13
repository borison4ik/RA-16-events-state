import React, { useState } from 'react';

import { Toolbar } from '../Toolbar';
import { ProjectList } from '../ProjectList';

import { DATA, FILTERS } from '../../data';

export const Portfolio = () => {
  const [projects, setProjects] = useState(DATA);
  const [selected, setSelected] = useState('All');

  const onFilterSelect = (filter) => {
    const filterName = filter.target.textContent;
    setSelected(filterName);
    setProjects(filterName === 'All' ? DATA : DATA.filter((project) => project.category === filterName));
  };

  return (
    <div>
      <h2 className='mb-3'>SHOP</h2>
      <Toolbar filters={FILTERS} selected={selected} onSelectFilter={onFilterSelect} />
      <ProjectList projects={projects} />
    </div>
  );
};
