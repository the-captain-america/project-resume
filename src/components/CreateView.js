import React, { Component } from 'react';

class CreateView extends React.Component {

  renderItems() {
    const { createdArr } = this.props;
    const generateArr = this.props.createdArr;
    return createdArr.map((el, index) => {
      return (
        <li className="list__item" key={index}>
          <a>{el.title}</a>
        </li>
      );
    });
  }

  render() {
    return (
       <div className="col-md-6">
            <ul className="list">
              {this.renderItems()}
            </ul>
        </div>
    );
  }
}

export default CreateView;
