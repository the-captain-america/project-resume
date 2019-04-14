import React, { Component } from 'react';

class ModalDialog extends React.Component {
  renderModal() {
    return (
        <div
          className={this.props.modal === true ? "modal-content active" : "modal-content"}>
          <span className="close" onClick={this.props.onPressClose}>
          </span>
        <span style={{marginTop:50}}>{this.props.children}</span>
        </div>
    );
  }
  renderOverlay() {
    return (
      <div
        onClick={this.props.onPressOverlay}
        className={this.props.modal === true ? "modal active" : "modal"}>
       </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderOverlay()}
        {this.renderModal()}
      </div>
    );
  }
}

export default ModalDialog;
