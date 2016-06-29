/* eslint react/prop-types:0 no-console:0 */

import React from 'react';
// import { render } from 'react-dom';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class Seat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTaken: false,
      color: 'green',
    };
    this.purchaseSeat = this.purchaseSeat.bind(this);
  }

  purchaseSeat() {
    const purchased = this.state.isTaken;
    if (!purchased) {
      this.setState({ isTaken: true });
    } else {
      this.setState({ isTaken: false });
    }
  }

  render() {
    const purchased = this.state.isTaken;
    let color = 'green';
    if (!purchased) {
      color = 'green';
    } else {
      color = 'red';
    }
    return (
      <span>
        <button
          type="button"
          key={this.props.seatName}
          style={{ color }}
          onClick={this.purchaseSeat}
        >
          {this.props.seatName}
        </button>
      </span>
    );
  }
}


export default Seat;
