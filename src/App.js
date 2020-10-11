import { Link } from '@reach/router';
import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Balance Board</Link>
      </header>
    </div>
  );
};

render(<App />, document.getElementById('root'));
