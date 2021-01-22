import React, { useEffect, useState, useRef } from 'react'

export default function Analyser({ audio }) {
  const [audioContext, setAudioContext] = useState(new (window.AudioContext || window.webkitAudioContext)());
  const [analyser, setAnalyser] = useState(audioContext.createAnalyser());
  const [dataArray, setDataArray] = useState(new Uint8Array(analyser.frequencyBinCount));
  const [source, setSource] = useState(audioContext.createMediaStreamSource(audio));
  const [audioData, setAudioData] = useState(new Uint8Array(0));
  const requestRef = useRef();

  const tick = () => {
    analyser.getByteTimeDomainData(dataArray);
    setAudioData(dataArray);
    requestRef.current = requestAnimationFrame(tick);
  }

  const changeValue = () => {
    setDataArray(audioData);
  }

  useEffect(() => {
    source.connect(analyser);
    requestRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(requestRef.current);
  }, [])

  return <textarea onChange={changeValue} value={dataArray} />;
}
