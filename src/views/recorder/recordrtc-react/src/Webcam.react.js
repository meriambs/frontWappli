import React from 'react';

const Webcam = (props) => {
    const { src } = props;
    console.log('src', src)
    return (
      <video autoPlay src={src} />
    )
  }

export default Webcam;
