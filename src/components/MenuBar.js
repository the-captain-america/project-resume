import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected : props.selected || 0
    };
    this.callHistory = this.callHistory.bind(this);
  }

  renderOverlay() {
    console.log('overlay', this.props.menu);
    return (
      <div
        onClick={this.props.onPressOverlay}
        className={this.props.menu === true ? "overlay" : "hide-overlay"}>
      </div>
    );
  }

  renderMenu() {
     let className = "menu-btn";
     if (this.props.menu === true) {
       className += " active";
    }

    return (
      <div>
        <a onClick={this.props.onPressMenu} className={className}>
          <span></span>
        </a>
      </div>
    );
  }

  callHistory(el, i) {
    this.setState({
      selected: i
    });
  }

  renderFull() {
    return this.props.data.map((el, i) => {
      let selected = '';
      if(this.state.selected == i) {
        selected = 'active';
      }
      return (
        <li key={i} className={selected}>
          <Link
            to={el.link}
            onClick={() => this.callHistory(el, i)}>
            {el.title}
          </Link>
        </li>
      )
    });
  }

  renderNav() {
    let className = "menu";
    if (this.props.menu && this.props.menu === true) {
      className += " active";
    }

    return (
        <div className={className}>
          {this.renderMenu()}
          <ul className="menu-list">
            <span className="menu-container">
              {this.renderFull()}
            </span>
          </ul>
        </div>
    );
  }

  render() {
    return (
      <div className="test-overlay">
	      {this.renderNav()}
        {this.renderOverlay()}
	    </div>
    );
  }
}

export default MenuBar;
