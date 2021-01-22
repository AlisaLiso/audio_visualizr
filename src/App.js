import React, { useState, useEffect } from 'react';
import Cube from './Cube';
import Rectangle from './Rectangle';
import Analyser from './Analyser';
import './App.scss';

function App() {
  const [isBox3D, setIsBox3D] = useState(false);
  const [isBox2D, setIsBox2D] = useState(true);
  const [audio, setAudio] = useState(null);
  const [isMicActive, setIsMicActive] = useState(false);

  const getMic = async () => {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    setIsMicActive(true);
    setAudio(audio);
  }

  const stopMic = () => {
    audio.getTracks().forEach(track => track.stop());
    setAudio(null);
  }

  const toggleMic = () => audio
    ? stopMic()
    : getMic();

  useEffect(() => {
    // getMic();
    return () => {
      if (audio) stopMic();
    }
  }, []);

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
          Briliant audio visualiztr with Web Audio API
        </h1>
        {audio ? <Analyser audio={audio} /> : 'No audio data'}
      </div>
      <div className="wrapper">
        <div className="toggle-radio">
          <input type="radio" id="radio-left" defaultChecked={isBox3D} />
          <input type="radio" id="radio-right" defaultChecked={isBox2D} />
          <div className="switch">
            <label onClick={enable3DVuew} className="toggle-left" htmlFor="radio-left">3D</label>
            <label onClick={enable2DVuew} className="toggle-right" htmlFor="radio-right">2D</label>
          </div>
        </div>
        {isBox3D &&
          <Cube />
        }

        {isBox2D &&
          <Rectangle onRectClick={toggleMic} isMicActive={isMicActive} setIsMicActive={setIsMicActive} />
        }
      </div>
    </div>
  );
}

export default App;
