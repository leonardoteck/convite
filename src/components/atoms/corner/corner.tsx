import React from 'react';
import cornerImg from '../../../resources/corner.png'
import './corner.css'

type Props = {
  top?: boolean,
  left?: boolean,
  bottom?: boolean,
  right?: boolean
}

export const Corner = ({
  top = false, left = false, bottom = false, right = false
}: Props) => {
  let rotate = 0;
  if (top && left) rotate = 90;
  if (top && right) rotate = 180;
  if (bottom && right) rotate = -90;
  
  const position: any = {};
  if (top) position['top'] = '30px';
  if (left) position['left'] = '30px';
  if (bottom) position['bottom'] = '30px';
  if (right) position['right'] = '30px';

  return <img src={cornerImg} id='cornerImg' alt='' style={{ rotate: rotate + 'deg', ...position }} />;
}