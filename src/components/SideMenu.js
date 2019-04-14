import React, { Component } from 'react';
import Overlay from './Overlay';

class SideMenu extends React.Component {

  renderPanel() {
    let menuClass = 'insertion';
    let iconName = 'fa fa-close';
    if(this.props.toggleMenu == true) {
      menuClass += ' -active';
      iconName = 'fa fa-chevron-right';
    } else {
      menuClass = 'insertion';
      iconName = 'fa fa-chevron-left';
    }

    return (
      <section className={menuClass}>
        <span
          className='close-side-bar' onClick={this.props.onPressToggleMenu}>
          <i className={iconName} aria-hidden="true"></i>
        </span>
        <div>{this.props.children}</div>
      </section>
    );
  }

  render() {
    return (
      <div>
        {this.renderPanel()}
        <Overlay
          overlay={this.props.toggleMenu}
          onPressOverlay={this.props.onPressOverlay} />
      </div>
    );
  }
}

export default SideMenu;
