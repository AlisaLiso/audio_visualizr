import React from 'react'

export default function ToggleComponent({ isBox3D, setIsBox3D, isBox2D, setIsBox2D }) {
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
    <div className="toggle-radio">
      <input type="radio" id="radio-left" checked={isBox3D} />
      <input type="radio" id="radio-right" checked={isBox2D} />
      <div className="switch">
        <label onClick={enable3DVuew} className="toggle-left" htmlFor="radio-left">3D</label>
        <label onClick={enable2DVuew} className="toggle-right" htmlFor="radio-right">2D</label>
      </div>
    </div>
  )
}
