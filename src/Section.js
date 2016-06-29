/* eslint react/prop-types:0 no-console:0 */
import Seat from './Seat';
import React from 'react';
// import { render } from 'react-dom';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class Section extends React.Component {
  constructor(props) {
    console.log('props:', props);
    super(props);
    this.state = { seatsPurchased: [] };
    this.totalSeats = [];
    for (let i = this.props.startingSeatNumber;
      i < this.props.startingSeatNumber + this.props.quantity; i++) {
      this.totalSeats.push(`A${i}`);
    }
  }


  render() {
    let buttonSeats = [];
    buttonSeats = this.totalSeats.map((e) =>
      <Seat key={e} ref={e} seatName={e} seatClass={this.props.sectionName} />);
    console.log('buttonseats is ', buttonSeats);

    return (
      <div>
        <h3> Section Name: {this.props.sectionName}</h3>
        {buttonSeats}
      </div>
    );
  }
}


export default Section;
