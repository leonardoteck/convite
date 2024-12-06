import React from 'react';
import './logo.css';
import glitterImg from '../../../resources/glitter.gif';
import flowerCrown from '../../../resources/flower-crown.png';
import goldenRings from '../../../resources/goldenRings.svg';

export const Logo = () => (
  <div id='logo-space'>
    <div id='logo'>
      <div id='circle' />
      <img src={glitterImg} alt='' id='glitter1' />
      <img src={glitterImg} alt='' id='glitter2' />
      <img src={goldenRings} alt='' id='goldenRings' />
      {/* <span>K</span>
      <span>L</span> */}
      <img src={flowerCrown} alt='' id='flowerCrown' /> 
    </div>
  </div>
)