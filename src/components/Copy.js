import React, { useState, useRef } from 'react';

const Copy = () => {
  const [text, setText] = useState('');
  const inputRef = useRef();
  const handleCopy = () => {
    const input = inputRef.current;
    console.log(input);
  };
  return (
    <div>
      <input
        ref={inputRef}
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
    </div>
  );
};

export default Copy;
