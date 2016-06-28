/* eslint react/prop-types:0 */

import React from 'react';
// import { render } from 'react-dom';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class Seat extends React.Component {
  constructor(props) {
    super(props);
    this.seatName = props.seatName;
    this.state = { isTaken: false };
    this.seatClass = props.seatClass;
    this.toggleColor = this.toggleColor.bind(this);
    }

  toggleColor() {
    console.log('onclick is called', this.state.isTaken);
    if (this.state.isTaken) {
      this.state.isTaken = false;
      this.state.color = 'red';
    } else {
      this.state.isTaken = true;
      this.color = 'green';
    }
    this.setState = ({ isTaken: this.state.isTaken });
  }

  render() {
    return (
      <span>
      if (this.state.istaken) {(
        <button type="button" key={this.props.seatName} style={{ color: this.state.color }} onClick={this.toggleColor}>
          {this.props.seatName}
        </button>
      )} else {(
        <button type="button" key={this.props.seatName} style={{ color: this.state.color }} onClick={this.toggleColor}>
          {this.props.seatName}
        </button>
      )}


      </span>
    );
  }
}


export default Seat;
