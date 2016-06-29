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
    };
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
    let button = '';
    if (!this.state.isTaken) {
      button = (<button
        type="button"
        key={this.props.seatName}
        style={{ color: 'green' }}
        onClick={this.toggleColor}
      >
        {this.props.seatName}
      </button>);
    } else {
      button = (<button
        type="button"
        key={this.props.seatName}
        style={{ color: 'red' }}
        onClick={this.toggleColor}
      >
        {this.props.seatName}
      </button>);
    }
    return (
      <span>
        {button}
      </span>
    );
  }
}


export default Seat;
