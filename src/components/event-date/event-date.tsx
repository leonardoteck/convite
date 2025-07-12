import React from 'react';
import './event-date.css';
import Divider2 from '../../resources/divider2.svg';

export const EventDate = () => (
  <div>
    <p id='eventDate'>
      16/ 11/ 2025
    </p>
    <img src={Divider2} alt='' id='eventDateDivider' />
    <p id="eventHour">
      Início da cerimônia às 15:00
    </p>
    <p id="eventMessage">
      Pedimos que cheguem com devida antecedência<br />
      para que possamos começar pontualmente!
    </p>
  </div>
);
