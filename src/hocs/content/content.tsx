import React from 'react';
import './content.css'
import { Logo } from '../../components/logo/logo';
import { Names } from '../../components/names/names';
import { Subtitle } from '../../components/subtitle/subtitle';
import { EventDate } from '../../components/event-date/event-date';

export const Content = () => {
  return (
    <div id='mask'>
      <div id="content">
        <Logo />
        <Names />
        <Subtitle />
        <EventDate />
      </div>
    </div>
  );
}
