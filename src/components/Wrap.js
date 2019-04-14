import React, { Component } from 'react';
import Header from './Header';
import { Footer } from './Footer';

class Wrap extends React.Component {

  render() {
    return (
      <div>
        <Header
          title={'Odd Skillz'}
          sub={'Rate your skills'}
        />
        <div className="page-wrap">
          <div className="container">
            <div className="content">
              {this.props.children}
            </div>
          </div>
        </div>
        <div id="push"></div>
      </div>
    );
  }
}

export default Wrap;
