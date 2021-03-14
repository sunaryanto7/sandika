import React, { useState } from 'react';

const Image = ({ src, fallBack }) => {
  const [state, setState] = useState({ src: src });
  const handleError = () => {
    setState({ src: fallBack })
  };

  return (
    <>
      <img src={state.src} onError={handleError} />
    </>
  );
};

export default React.memo(Image);