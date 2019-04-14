import React, { Component } from 'react';

class Default extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
  }

  onPressCreate() {
    this.props.history.push('/create');
  }

  render() {
    return (
      <section>
        <span className="btn-container">
        <button
          className="btn btn-normal"
          style={{width:200}}
          onClick={this.onPressCreate.bind(this)}>
          Get Started
        </button>
        </span>
      </section>
    );
  }
}

export default Default;
