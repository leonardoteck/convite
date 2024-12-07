import React from 'react';
import './background-image.css';
import { useWindowDimensions } from '../../utils/useWindowDimensions';

export const BackgroundImage = () => {
  const { height, width } = useWindowDimensions();
  const halfHeight = height / 2; 

  return (
    <div id='bgImg'>
      <svg role="presentation" preserveAspectRatio="xMidYMid slice" width={width} height={height} opacity={0.63}><defs><linearGradient gradientUnits="userSpaceOnUse" id="__id0__id1" x1="0" y1={halfHeight} x2={width} height={halfHeight}><stop stop-color="#52c1ff" stop-opacity="1" offset="0"></stop><stop stop-color="#8ce0e4" stop-opacity="1" offset="1"></stop></linearGradient></defs><rect x="0" y="0" width={width} height={height} fill="url(#__id0__id1)"></rect></svg>
    </div>
  )
}