import React, { Component } from 'react';
import { connect } from 'react-redux';
import { data, skills } from '../helpers/data';
import SideMenu from '../components/SideMenu';
import AddSkill from '../components/AddSkill';
import UploadAvatar from './UploadAvatar';
import CurrentSkills from './CurrentSkills';
import AddSkillButton from '../components/AddSkillButton';
import ModalDialog from '../components/ModalDialog';
import AutoComplete from '../components/AutoComplete';
import AddSelection from './AddSelection';

class CreateContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: true,
      firstName: 'Philip',
      lastName: 'Hultgren',
      content: `Inside the search skills box, select your skill set and you will then be provided a rating option.  If your skill is not listed
      please add it by pressing the add new skill button.`,
      skillChoices: [],
      profileDesc: 'Front End Engineer',
      skills: [],
      modal: (!!this.props.modal) || false,
      toggleMenu: false
    };
    this.onPressOverlay = this.onPressOverlay.bind(this);
    this.onPressClose = this.onPressClose.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;
    let constData = data;
    console.log('updated props', data);
    this.setState({
      skillChoices: constData
    });
    console.log('skill choices', this.state.skillChoices);
  }

  onPressToggleMenu() {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  }

  updateChoices(data) {
    const skills = skillChoices.slice();
    let updateSkills = skills.push(data);
    this.setState({
      skillChoices: updateSkills
    });
  }

  removeClick(i) {
    let value = this.state.skills.slice();
    value.splice(index,1);
    this.setState({
      skills
    });
  }

  onPressInfo() {
    this.setState({
      showContent: !this.state.showContent
    });
  }

  onPressClose() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onPressOverlay() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onPressAdd() {
    this.setState({
      modal:true,
      toggleMenu: false
    });
  }

  onPressOpen() {
    this.setState({
      toggleMenu: true
    })
  }

  renderSkills() {
    return (
      <div>
        <div className="col-md-6">
          <CurrentSkills
            onPressRemove={this.removeClick.bind(this)}
            skills={skills}
            onPressOpen={this.onPressOpen.bind(this)} />
        </div>
        <div className="col-md-6">
          <UploadAvatar
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          description={this.state.profileDesc} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderSkills()}
        <SideMenu
          onPressToggleMenu={this.onPressToggleMenu.bind(this)}
          toggleMenu={this.state.toggleMenu}
          overlay={this.state.toggleMenu}
          onPressOverlay={this.onPressToggleMenu.bind(this)}>
          <AddSkill
            onPressAdd={this.onPressAdd.bind(this)}
            content={this.state.content}
            showContent={this.state.showContent}
            onPressInfo={this.onPressInfo.bind(this)}>
          <AutoComplete name='skills' options={this.state.skillChoices}>
          <input 
            className="input search" 
            placeholder='Search skills' />
          </AutoComplete>
          <AddSkillButton onPressAdd={this.onPressAdd.bind(this)} />
          </AddSkill>
        </SideMenu>

        <ModalDialog
          modal={this.state.modal}
          onPressClose={this.onPressClose}
          onPressOverlay={this.onPressOverlay}>
          <AddSelection />
        </ModalDialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.selectionList
  };
}

export default connect(mapStateToProps, null)(CreateContainer);
