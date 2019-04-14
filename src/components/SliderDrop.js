import React, { Component } from 'react';

class SliderDrop extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      minValue: 0,
      maxValue: 10,
      step: 1,
      setValue: 0,
      secondValue: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      firstValue: this.state.minValue,
      secondValue: this.state.maxValue
    });
  }

  handleChange(event) {
    let value = event.target.value;
    this.setState({
      setValue: value
    });
  }

  onPressSave() {
    const value = this.state.setValue;
  }

  render() {
    const language = this.props.language;

    return (
        <section>
          <h3>Skill level</h3>
          <sm>0 = No skill, 10 = experienced.</sm>
          <p>Use the slider below to represent your skill set from the dropdown.</p>

          <div className="range-slider">
              <div style={{float:'left'}} className="minValue">{this.state.minValue}</div>
              <div style={{float:'right'}} className="maxValue">{this.state.maxValue}</div>

              <input type="range"
                className="slider"
                value={this.state.setValue}
                min={this.state.minValue}
                max={this.state.maxValue}
                step={this.state.step}
                onChange={this.handleChange.bind(this)}/>
              <p style={{marginTop: 10}}>You have rated: &nbsp;
              <span className="setValue">{this.state.setValue}</span>/10</p>
          </div>
          <button
            className="btn btn-normal"
            style={{width:100}}
            onClick={this.props.onPressSave}>
            Save
          </button>
        </section>
    );
  }
}

export default SliderDrop;
