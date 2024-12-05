import React from 'react';
import './flowers.css';
import { useWindowDimensions } from '../../../utils/useWindowDimensions';
import { Flower } from '../../components/flower/flower';

export const Flowers = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div id='flowers'>
      <Flower />
      {width > height && <Flower mirror />}
    </div>
  )
}