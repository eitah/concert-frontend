/* eslint react/prop-types:0 */

import React from 'react';
// import { render } from 'react-dom';
require('es6-promise').polyfill();
require('isomorphic-fetch');
import Section from './Section';

class Venue extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sectionArray: [], startingSeatNumber: this.props.startingSeatNumber };
    this.makeSeats = this.makeSeats.bind(this);
    console.log('strrt seats', this.props.startingSeatNumber)
  }

  makeSeats() {
    console.log('this.value of type seats', this.props.startingSeatNumber)

    const section = (
      <Section
        key={Math.random()}
        sectionName={this.refs.typeSeatsDropdown.value}
        quantity={this.refs.quantity.value * 1}
        costPerSeat={this.refs.costPerSeat.value * 1}
        startingSeatNumber={this.state.startingSeatNumber}
      />);

    const newStartingSeat = this.props.startingSeatNumber + this.refs.quantity.value * 1;

    this.setState({ startingSeatNumber: newStartingSeat });

    console.log('this.value of type seats after add is', this.state.startingSeatNumber);

    //

    this.state.sectionArray.push(section);

    this.setState({ sectionArray: this.state.sectionArray });
  }


  render() {
    console.log('this.state', this.state)

    return (
      <div>
        <h2> {this.venueName} </h2>
        <div>
          <input type="number" name="quantity" ref="quantity"/> Quantity of Seats Required
        </div>
        <div>
          <select name="typeSeatsDropdown" ref="typeSeatsDropdown">
            <option value="premium">Premium</option>
            <option value="general">General</option>
          </select>
        </div>
        <div>
          <input type="number" name="costPerSeat" ref="costPerSeat" /> Cost Per Seat
        </div>
        <div>
          <button type="submit" onClick={this.makeSeats}>Make Seats</button>
        </div>
        <div>
          {this.state.sectionArray}
        </div>
      </div>
    );
  }
}



export default Venue;
