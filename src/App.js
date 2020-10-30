import React, { useState } from 'react';
import { render } from 'react-dom';

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  if ('Accelerometer' in window) {
    let sensor = new Accelerometer();

    sensor.addEventListener('reading', (e) => {
      window.alert(e.target);
      setX(e.target.x);
      setY(e.target.y);
      setZ(e.target.z);
    });

    sensor.start();
  }

  return (
    <div>
      <div>
        X = {x} Y = {y} Z = {z}
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
