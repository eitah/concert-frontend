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
    this.setState({ seatsPurchased: [] });
    this.totalSeats = [];
    for (let i = this.props.startingSeatNumber;
      i < this.props.startingSeatNumber + this.props.quantity; i++) {
      this.totalSeats.push(`A${i}`);
    }
  }

  componentDidMount(){
    console.log('refs*******:', this);
  }

  render() {
    console.log('render****');
    let buttonSeats = [];
    buttonSeats = this.totalSeats.map((e,i) =>
      <Seat key={e} ref={'r'+i} seatName={e} seatClass={this.props.sectionName} />);
    console.log('buttonseats is ', buttonSeats);

    console.log('refs is', buttonSeats.refs);
    // debugger;

    let numPurchasedSeats = 0
    // numPurchasedSeats = this.buttonSeats.reduce((total, this.refs.seatName.isPurchased) =>
    // {total + seat.isPurchased;}, 0)
    console.log('numPurchasedSeats', numPurchasedSeats);

    return (
      <div>
        <h3> Section Name: {this.props.sectionName} </h3>
        <h4> Cost per Seat: {this.props.costPerSeat} </h4>
        <h4> Total of Section: {numPurchasedSeats} </h4>
        {buttonSeats}
      </div>
    );
  }
}
<div> 

export default Section;
