import React, { Component } from 'react';
import CreateView from './CreateView';

class Fields extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      text: '',
      error: '',
      createdArr: []
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onPressError = this.onPressError.bind(this);
  }

  onFormSubmit(event) {
      event.preventDefault();
      const title = this.refs.title.value;
      const text = this.refs.text.value;
    if(!(title && text)){
      this.setState({ error: 'Please fill in the fields' });
    } else {
      this.setState({
        error:''
      })
    const data = { title, text };
    this.createHistory(data);
    console.log('created content', data);
    }
  }

  createHistory(data) {
    const { createdArr } = this.state;
    const updatedArr = createdArr;

    updatedArr.push(data);

    this.setState({
      createdArr: updatedArr
    });

    console.log('this is created array', this.state.createdArr);
  }

  onPressError() {
    this.setState({
      error: ''
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
      )
    }
  }

  render() {
    return (
      <div className="row">
          <div className="col-md-6">
            <form
              id="createHistory"
              role="form"
              onSubmit={this.onFormSubmit}>

          <section>
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
                <label htmlFor="text">Text: </label>
                <textArea
                  type="text"
                  style={{width: '100%'}}
                  placeholder="Text"
                  name="text"
                  ref="text"
                  id="text"
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
           <CreateView createdArr={this.state.createdArr} />
        </div>
      </div>
    );
  }
}
export default Fields;
