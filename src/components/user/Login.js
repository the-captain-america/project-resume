import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
//import { loginUser, fetchUser } from '../../actions/firebase_actions';

class UserLogin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: '',
        error: ''
      };
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        const email = this.refs.email.value;
        const password = this.refs.password.value;

    		if(!(email === 'philiphultgren7@gmail.com' )){
      		this.setState({ error: 'Authentication Failed' });
    		}
      	else {
          //this.props.loginUser({email, password});
          // console.log('user', this.props.currentUser);
          this.props.history.push('/dash');
        }
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

          // const email = this.refs.email.value;
        // const password = this.refs.password.value;
        // this.props.loginUser({ email, password });
      	//this.props.history.push('/dash');

    render() {
        return (
          <div className="center-section">
            <section className="set-form">
              <form id="frmLogin" role="form" onSubmit={this.onFormSubmit}>
                <h2>Login</h2>
                <ul className="input-list style-4 clearfix">
                  {this.renderError()}
                  <li>
                    <label className="login" htmlFor="email">Username: </label>
                    <input
                      type="text"
                      style={{width: '100%'}}
                      placeholder="Username"
                      name="email"
                      ref="email"
                      id="email"
                      />
                  </li>
                  <li>
                    <label className="login" htmlFor="title">Password: </label>
                    <input
                      type="password"
                      style={{width: '100%'}}
                      placeholder="Password"
                      name="password"
                      ref="password"
                      id="password"
                      />
                  </li>
                </ul>
                <div className="submit-area">
                  <button
                    type="submit"
                    style={{minWidth:200, marginTop: 20, width:'100%' }}
                    className="btn btn-submit">
                      Login
                  </button>
                  <p style={{display:'none'}}><Link to="/reset">Forgot password</Link></p>
                </div>
              </form>
            </section>
          </div>
        );
    }
}

// note that the below 'const' declarations are invoked impli
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         loginUser,
//         fetchUser,
//     }, dispatch);
// }
//
// const mapStateToProps = (state) => {
//     return { currentUser: state.currentUser };
// }

export default UserLogin;
