import React, { useState } from 'react';
import Cube from './Cube';
import Rectangle from './Rectangle';
import './App.scss';

function App() {
  const [isBox3D, setIsBox3D] = useState(false);
  const [isBox2D, setIsBox2D] = useState(true);

  const enable3DVuew = () => {
    if (isBox3D) return;

    setIsBox2D(false);
    setIsBox3D(true);
  }

  const enable2DVuew = () => {
    if (isBox2D) return;

    setIsBox3D(false);
    setIsBox2D(true);
  }

  return (
    <div className="container">
      <div className="wrapper">
        <h1>
          Brilliant audio visualizatr with Web Audio API
        </h1>
      </div>
      <div className="wrapper">
        <div className="radio-btn">
          <p>
            <input type="radio" id="test1" name="radio-group" />
            <label onClick={enable3DVuew} for="test1">3D</label>
          </p>
          <p>
            <input type="radio" id="test2" name="radio-group" checked />
            <label onClick={enable2DVuew} for="test2">2D</label>
          </p>
        </div>
        {isBox3D &&
          <Cube />
        }

        {isBox2D &&
          <Rectangle />
        }
      </div>
    </div>
  );
}

export default App;
