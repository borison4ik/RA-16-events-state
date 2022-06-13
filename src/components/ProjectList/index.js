import React from 'react';
import Masonry from 'react-masonry-css';

import { MasonryImg } from '../common/MasonryImg';

export const ProjectList = ({ projects }) => {
  return (
    <div className='project-list'>
      <Masonry breakpointCols={3} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
        {projects.map((project, i) => (
          <MasonryImg key={i} img={project.img} category={project.category} />
        ))}
      </Masonry>
    </div>
  );
};
