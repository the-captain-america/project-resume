import React, { Component } from 'react';
import MenuBar from './MenuBar';
import Avatar from './Avatar';


const dataVertical = [
  {
   title: 'Home',
   link: '/home',
   selected:null
  },
  {
   title: 'Search',
   link: '/search',
   selected:null
  },
  {
    title: 'Dashboard',
    link: '/dash',
    selected:null
  }
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      toggleButton: false
    };
    this.onPressOverlay = this.onPressOverlay.bind(this);
    this.onPressMenu = this.onPressMenu.bind(this);
    this.onPressAuth = this.onPressAuth.bind(this);
  }

  onPressMenu() {
    this.setState({
      menu: !this.state.menu
    });
  }

  onPressOverlay() {
    this.setState({
      menu: !this.state.menu
    });
  }

  onPressAuth() {
    this.setState({
      toggleButton: !this.state.toggleButton
    });
  }

  render() {
    return (
      <header className="header-bar">

        <MenuBar
          menu={this.state.menu}
          data={dataVertical}
          onPressMenu={this.onPressMenu}
          onPressOverlay={this.onPressOverlay} />

        <Avatar
          onActive={this.state.toggleButton}
          onPressAuth={this.onPressAuth} />

      </header>
    );
  }
}

export default Header;
