import React from 'react';

const Background = ({ image }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
      }}
    />
  );
};

export default Background;
