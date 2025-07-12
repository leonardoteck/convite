import React from 'react';
import './logo.css';
import glitterImg from '../../resources/glitter.gif';
import flowerCrown from '../../resources/flower-crown.png';
import goldenRings from '../../resources/goldenRings.svg';
import { useWindowDimensions } from '../../utils/useWindowDimensions';

export const Logo = () => {
  const { height, width } = useWindowDimensions();
  return (
    <>
      {height > width && <div id="logo-margin-top" />}
      <div id='logo-space'>
        <div id='logo'>
          <div id='circle' />
          <img src={glitterImg} alt='' id='glitter1' className='glitter' />
          <img src={glitterImg} alt='' id='glitter2' className='glitter' />
          <img src={goldenRings} alt='' id='goldenRings' />
          <span id='K' className='logoChar'>K</span>
          <span id='L' className='logoChar'>L</span>
          <img src={flowerCrown} alt='' id='flowerCrown' /> 
        </div>
      </div>
    </>
  )
}