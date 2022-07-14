import React, { useState, useRef, useEffect } from 'react';
import Card from './Card';

const Loading = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {show && <Card />}
    </div>
  );
};

export default Loading;
