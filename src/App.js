import React, { useState } from 'react';
import { render } from 'react-dom';

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  const [balance, setBalance] = useState(false);
  const [debouncedBalance, setDebouncedBalance] = useState(false);
  const lastBalance = {
    value: false,
    count: 1,
  };

  // eslint-disable-next-line no-undef
  let sensor = new Accelerometer();

  sensor.addEventListener('reading', () => {
    try {
      setX(sensor.x);
      setY(sensor.y);
      setZ(sensor.z);

      const isInBalance = computeBalance(sensor);
      setBalance(isInBalance ? 'OK' : 'NO');

      if (isInBalance === lastBalance.value) {
        lastBalance.count++;
      } else {
        lastBalance.value = isInBalance;
        lastBalance.count = 1;
      }

      if (lastBalance.count > 1) {
        setDebouncedBalance(isInBalance ? 'OK' : 'NO');
      }
    } catch (err) {
      alert(err);
    }
  });

  sensor.start();

  return (
    <div>
      <div>
        X = {x} <br></br>Y = {y} <br></br>Z = {z}
      </div>
      <div>balance = {balance}</div>
      <div>debouncedBalance = {debouncedBalance}</div>
    </div>
  );
};

// TODO need to change state only after XXX ms

function computeBalance(sensor) {
  const radius = 2.2;
  // https://www.youmath.it/formulari/formulari-di-geometria-analitica/426-distanza-tra-due-punti-nel-piano.html
  try {
    const distanceFromCenter = Math.sqrt(
      (0 - sensor.x) * (0 - sensor.x) + (0 - sensor.y) * (0 - sensor.y)
    );

    return distanceFromCenter < radius;
  } catch (err) {
    alert(err);
  }
}

render(<App />, document.getElementById('root'));
