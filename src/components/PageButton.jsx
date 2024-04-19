import React from 'react';
import './PageButton.css';

const PageButton = ({ onClick, direction }) => {
  return (
    <button className='page-button' onClick={onClick}>
      {direction === 'next' ? 'Next Page' : 'Previous Page'}
    </button>
  );
};

export default PageButton;
