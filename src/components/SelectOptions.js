import React, { Component } from 'react';

class SelectOptions extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectOptions: [],
      selection: 'select'
    };
  }

  componentWillMount(){
    this.setState({
      selectOptions: this.props.data ? this.props.data : data
    });
  }

  selectMenu(event) {
    const selectOption = event.target.value;
  }

  renderOptions() {
    const { selectOptions } = this.state;
    return selectOptions.map((option, i) => {
      return (
        <option
          key={i}
          value={option.option}>
          {option.option}
        </option>
      )
    });
  }

  renderSelect() {
    return (
      <div>
       <select
         className="select-style"
         id="lang"
         onChange={(event) => this.selectMenu(event)}
         value={this.state.selection}>
          {this.renderOptions()}
       </select>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderSelect()}
      </div>
    );
  }
}

export default SelectOptions;
