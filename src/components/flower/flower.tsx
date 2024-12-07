import React from 'react';
import './flower.css';
import flowerImg from '../../resources/flower.png';

export const Flower = ({ mirror = false }) => (
  <img src={flowerImg} alt='' id='flower' className={mirror ? 'mirror' : ''} />
)