import React from 'react';
import { BackgroundImage } from '../../atoms/background-image/background-image';
import { Corners } from '../corners/corners';
import { Flowers } from '../flowers/flowers';

export const Background = () => (
  <>
    <BackgroundImage />
    <Corners />
    <Flowers />
  </>
);
