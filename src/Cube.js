import React from 'react';
import './Cube.scss';

export default function Cube() {
  return (
    <div className="loader">
      <div className="panel top"></div>
      <div className="panel sub-top"></div>
      <div className="panel bottom"></div>
      <div className="panel left"></div>
      <div className="panel right"></div>
      <div className="panel back"></div>
      <div className="panel front"></div>
      <div className="panel fill-top"></div>
    </div>
  )
}
