import React from 'react';
import './content.css'
import { Logo } from '../../components/logo/logo';
import { Names } from '../../components/names/names';
import { Subtitle } from '../../components/subtitle/subtitle';
import { EventDate } from '../../components/event-date/event-date';
import { Address } from '../../components/address/address';
import { Form } from '../../components/form/form';
import { Final } from '../../components/final/final';
import { useDarken } from '../../utils/useDarken';

export const Content = () => {
  useDarken();
  return (
    <div id='mask'>
      <div id="content">
        <div>
          <Logo />
          <Names />
        </div>
        <div><Subtitle /></div>
        <div><EventDate /></div>
        <div><Address /></div>
        <div><Form /></div>
        <div><Final /></div>
      </div>
    </div>
  );
}
