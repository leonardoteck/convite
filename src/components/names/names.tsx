import React from 'react';
import './names.css';
import { useWindowDimensions } from '../../utils/useWindowDimensions';
import DividerSvg from '../../resources/divider.svg';

type Props = { width?: string };

export const Names = ({ width }: Props) => {
  const { height, width: windowWidth } = useWindowDimensions();
  const vertical = (windowWidth / height) < 12 / 9;

  return (
    <div id='namesContainer' style={{ width: width || '100%' }}>
      <div id='namesFlexBox' style={{ flexDirection: vertical ? 'column' : 'row' }}>
        <span style={{ flex: 8, textAlign: vertical ? 'center' : 'right' }}>Leonardo</span>
        <span style={{ flex: 2, fontFamily: 'Cormorant Garamond' }}>&</span>
        <span style={{ flex: 8, textAlign: vertical ? 'center' : 'left' }}>Kimberly</span>
      </div>
      <img src={DividerSvg} alt='' width='70%' style={{ marginLeft: '15%', marginTop: '5vh' }} />
    </div>
  );
}