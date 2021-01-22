import React, { useState } from 'react';
import './Rect.scss';

export default function Rectangle({ isMicActive, setIsMicActive, onRectClick }) {
  const [highestPoint, setHighesPoint] = useState(60);
  const [lowestPoint, setLowestPoint] = useState(75);

  const toggleMic = () => {
    setIsMicActive((prev) => !prev);
    onRectClick();
  }

  return (
    <div className="rect" onClick={toggleMic} style={{
      backgroundImage: `linear-gradient(to bottom, transparent 0%, transparent ${highestPoint}%, var(--boxSubFillColor) ${highestPoint}%, var(--boxSubFillColor) ${lowestPoint}%, var(--boxFillColor) ${lowestPoint}%)`
    }}>
      <img className={`${!isMicActive && "rect__icon-hidden"}`}
        src={window.location.origin + '/mic.svg'} alt="Turn mic off" />
      <img className={`${isMicActive && "rect__icon-hidden"}`}
        src={window.location.origin + '/mic_off.svg'} alt="Turn mic on" />
    </div>
  )
}
