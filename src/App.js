import TitleComponent from './TitleComponent';
import AudioComponent from './AudioComponent';
import './App.scss';

function App() {
  return (
    <div className="container">
      <TitleComponent title="Briliant audio visualizr with Web Audio API" />
      <AudioComponent />
    </div>
  );
}

export default App;
