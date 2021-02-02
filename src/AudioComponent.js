import React, { useState, useEffect } from 'react';
import ToggleComponent from './ToggleComponent';
import AudioAnalyser from './AudioAnalyser';

export default function AudioComponent() {
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
    return () => {
      if (audio) stopMic();
    }
  }, []);

  return (
    <div className="wrapper">
      <ToggleComponent
        isBox3D={isBox3D}
        isBox2D={isBox2D}
        setIsBox3D={setIsBox3D}
        setIsBox2D={setIsBox2D}
      />

      <AudioAnalyser
        audio={audio && audio}
        is3D={isBox3D ? isBox3D : isBox3D}
        toggleMic={toggleMic}
        isMicActive={isMicActive}
        setIsMicActive={setIsMicActive}
      />
    </div>
  )
}
