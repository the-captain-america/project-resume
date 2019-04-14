import React, { Component } from 'react';

class CurrentSkills extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      skillsArr: []
    };
  }

  componentDidMount() {
    this.setState({
      skillsArr: this.props.skills
    });
  }

  onPressEdit(skill, i) {
    console.log('items', i, 'skill:', skill);
  }

  onPressRemove(i) {
    let skillsArr = this.state.skillsArr.slice();
    skillsArr.splice(i,1);
    this.setState({
       skillsArr
    });
  }

  renderSkills() {
    //const { skills } = this.props;
    const { skillsArr } = this.state;
    return skillsArr.map((skill, i) => {
      let className = 'skill';
      if(this.props.selected === i) {
        className += ' selected';
      } else {
        className = 'skill';
      }

      let style = {
        width:  (skill.level * 10) + '%',
        height: '24px'
      };

      return (
        <div key={i}
          className={className}>
          <span
            onClick={this.onPressEdit.bind(this, skill, i)}
            className="skill-edit">
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </span>

          <span
            onClick={this.onPressRemove.bind(this, i)}
            className="skill-remove">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </span>

          <span className="title">{skill.title}</span>
            <div className="progress-primary" style={{marginTop:20}}>
              <div className="progress-primary inside" style={style}></div>
            </div>
        </div>
      )
    });
  }

  render() {
    return (
      <section>
        <h3>My Skills</h3>
          <div>
            {this.renderSkills()}
          </div>
          <button
            style={{marginTop:20}}
            onClick={this.props.onPressOpen}
            className="btn btn-normal">
            Add Skill
          </button>
      </section>
    );
  }
}

export default CurrentSkills;
