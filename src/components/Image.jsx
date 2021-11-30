import React from 'react';

const Image = ({ imageSource, height, width }) => {
  return (
    <div>
      <img src={imageSource} alt='hero' height={height} width={width} />
    </div>
  );
};

export default Image;
