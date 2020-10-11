import React from 'react';
import { render } from 'react-dom';

const x = 0;
const y = 0;
const z = 0;

const App = () => {
  let acl = new window.Accelerometer({ frequency: 30 });
  // console.log(acl);
  // let max_magnitude = 0;
  // acl.addEventListener('activate', () => console.log('Ready to measure.'));
  // acl.addEventListener('error', (error) => console.log(`Error: ${error.name}`));
  // acl.addEventListener('reading', () => {
  //   let magnitude = Math.hypot(acl.x, acl.y, acl.z);
  //   if (magnitude > max_magnitude) {
  //     max_magnitude = magnitude;
  //     console.log(`Max magnitude: ${max_magnitude} m/s2`);
  //   }
  // });
  // acl.start();

  return (
    <div>
      <div>
        X = {x} Y = {y} Z = {z}
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
