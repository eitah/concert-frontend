import React from 'react';
import Section from './Section';
import Venue from './Venue';


export default () =>
  <div>
    <h1>
      TicketMonkey: Bal and Elis Best Concert Ticket App Ever!
    </h1>

    <div>
      <Venue controller venueName="Venue Controller" startingSeatNumber={1} />
    </div>
  </div>;
