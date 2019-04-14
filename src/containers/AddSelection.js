import React, { Component } from 'react';
import InfoSection from '../components/InfoSection';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  SelectionFetch,
} from '../actions/CreateSelection';

class AddSelection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      error: '',
      createdArr: [],
      showContent: true,
      content: `This dialog accepts new skills that may not have already been provided.  In the field, type in the name of the skill that you would like to add.  Once added, you will see it in the skills list search. `
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onPressError = this.onPressError.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    const title = this.refs.title.value;
    if(!(title)){
      this.setState({ error: 'Please fill in the fields' });
    } else {
      this.setState({
        error:''
      });
      const data = { title };
      this.createOption(data);
      console.log('created content', data);
    }
  }

  createOption(data) {
    const { createdArr } = this.state;
    const updatedArr = createdArr;
    updatedArr.push(data);
    //console.log('updated array:', updatedArr);
    this.props.SelectionFetch(data);
    this.setState({
      createdArr: updatedArr
    });
  }

  onPressError() {
    this.setState({
      error: ''
    });
  }

  onPressInfo() {
    this.setState({
      showContent: !this.state.showContent
    });
  }

  renderError() {
    if(this.state.error) {
      return (
        <li>
          <span className="error">{this.state.error}
            <span onClick={this.onPressError}>
              <i className="fa fa-times-circle"></i></span>
            </span>
        </li>
      );
    }
  }

  render() {
    return (
      <div className="row" style={{marginTop:70}}>
        <div className="col-md-6">
          <form
            id="createOption"
            role="form"
            onSubmit={this.onFormSubmit}>
            <section style={{height:200}}>
              <ul className="input-list style-4 clearfix">
                {this.renderError()}
                <li>
                  <label htmlFor="title">Title: </label>
                  <input
                    type="text"
                    style={{width: '100%'}}
                    placeholder="Title"
                    name="title"
                    ref="title"
                    id="title"
                  />
                </li>
                <li>
                  <button
                    className="btn btn-submit"
                    type="submit">
                    Create
                  </button>
                </li>
              </ul>
            </section>
          </form>
        </div>
        <div className="col-md-6">
          <InfoSection
            buttonStyle={{height:200}}
            revealContent={this.state.showContent}
            content={this.state.content}
            title={'Add Skill'}
          />
        </div>
      </div>
    );
  }
}

// necessary if multiple actions are called and bindActions together
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ SelectionFetch }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    data: state.selectionList
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSelection);
