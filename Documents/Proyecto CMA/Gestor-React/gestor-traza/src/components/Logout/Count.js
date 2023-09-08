import React, { useState } from 'react';

  function Example() {
    const [show, setShow] = useState(true);

    return (
      <div>
        
        <button onClick={() => setShow(!show)}>
            Mostrar {show}
       </button>
       {show ? (
        <div style={{ color: 'red' }}>Div 1</div>
      ) : (
        <div style={{ color: 'blue' }}>Div 2</div>
      )}
    </div>
    )
  }

export default Example;