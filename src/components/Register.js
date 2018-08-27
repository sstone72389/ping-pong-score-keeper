import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import formFields from './form/registerFormFields';
import { registerUser } from '../actions';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push('/roster');
    this.props.registerUser(this.state);
  }

  renderFields() {
    return _.map(formFields, ({ label, name, type }) => (
      <div key={name}>
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          name={name}
          type={type}
          value={this.state[name]}
          onChange={this.handleChange}
        />
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h4>Register Here</h4>
        <form onSubmit={this.handleSubmit}>
          {this.renderFields()}
          <button
            id="register"
            type="submit"
            className="center-align teal btn-flat right white-text"
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default withRouter(connect(mapStateToProps, { registerUser })(Register));
