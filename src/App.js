import React, { useState } from 'react';
import { render } from 'react-dom';

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  const [balance, setBalance] = useState(false);

  // eslint-disable-next-line no-undef
  let sensor = new Accelerometer();

  sensor.addEventListener('reading', () => {
    setX(sensor.x);
    setY(sensor.y);
    setZ(sensor.z);

    const isInBalance = computeBalance(sensor);
    setBalance(isInBalance ? 'You are in balance' : 'noooooo');
  });

  sensor.start();

  return (
    <div>
      <div>
        X = {x} <br></br>Y = {y} <br></br>Z = {z}
      </div>
      <div>balance = {balance}</div>
    </div>
  );
};

// TODO need to introduce score system
// TODO need to change state only after XXX ms
// TODO how do I know if I am hitting the ground outside the X and Y coordinates
function computeBalance(sensor) {
  // its on balance if X and Y are between range min and max
  const range = { min: -2.3, max: 2.3 };

  const isXinRange = sensor.x > range.min && sensor.x < range.max;
  const isYinRange = sensor.y > range.min && sensor.y < range.max;

  // Z should be higher than 9.5
  const isZInRange = sensor.z > 9.5;

  const isInBalance = isXinRange && isYinRange && isZInRange;

  return isInBalance;
}

render(<App />, document.getElementById('root'));
