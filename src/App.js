import Cube from './Cube';
import './App.scss';

function App() {
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
            <input type="radio" id="test1" name="radio-group" checked />
            <label for="test1">3D</label>
          </p>
          <p>
            <input type="radio" id="test2" name="radio-group" />
            <label for="test2">2D</label>
          </p>
        </div>
        <Cube />
      </div>
    </div>
  );
}

export default App;
