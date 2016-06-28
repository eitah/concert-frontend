import React from 'react';
import Section from './Section';
import Venue from './Venue';


export default () =>
  <div>
    <h1>
      TicketMonkey: Bal and Elis Best Concert Ticket App Ever!
    </h1>

    <div>
      <Venue controller venueName="Venue Controller" startingSeatNumber={71} />
    </div>


    <div>
      <Section sectionName="premium" quantity={20} costPerSeat={200} startingSeatNumber={1} />
      <Section sectionName="general" quantity={50} costPerSeat={40} startingSeatNumber={21} />
    </div>
  </div>;
