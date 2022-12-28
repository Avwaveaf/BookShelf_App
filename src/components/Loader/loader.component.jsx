import React from 'react';
import { CircleLoader } from 'react-spinners';
import "./loader.styles.scss"

const Loader = () => {
  return (
    <div className='loading'>
          <CircleLoader size={50} color='black' />
          <span>Loading Please Wait ...</span>
    </div>
  );
};

export default Loader;
