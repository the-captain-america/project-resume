import React, { Component } from 'react';
import InfoSection from '../components/InfoSection';
import InfoSectionToggle from '../components/InfoSectionToggle';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      error: '',
      showContent: true,
      content: `The field below accepts search criteria for those on Odecee bench. Try searching by technologies like: 'node', or 'javascript' and you will see a list of candidates with those skill sets.`
    };
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
          <div className="error">
            <span className="message">{this.state.error}</span>
            <span className="error-icon" onClick={this.onPressError.bind(this)}>
              <i className="fa fa-times-circle"></i>
            </span>
          </div>
        </li>
      )
    }
  }

  renderInfoSection() {
    return (
      <InfoSection
        revealContent={this.state.showContent}
        content={this.state.content}
        title={'Add Skill'}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderInfoSection()}
      <section>
        <InfoSectionToggle onPressInfo={this.onPressInfo.bind(this)} />
      <ul className="input-list style-4 clearfix">
        {this.renderError()}
        <li>
          <label className="search" htmlFor="search">Search: </label>
          <input
            type="text"
            style={{width: '100%'}}
            placeholder="Search"
            ref="email"
            id="search"
            />
        </li>
        </ul>
      </section>
    </div>
    )
  }
}

export default SearchContainer;
