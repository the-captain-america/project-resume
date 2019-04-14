import React, { Component } from 'react';

class Overlay extends React.Component {

  renderOverlay() {
    return (
      <div
        onClick={this.props.onPressOverlay}
        className={this.props.overlay === true ? "modal active" : "modal"}>
       </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderOverlay()}
      </div>
    );
  }
}

export default Overlay;
