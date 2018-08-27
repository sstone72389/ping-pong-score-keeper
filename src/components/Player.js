import React, { Component } from 'react';
import _ from 'lodash';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import newPlayerFields from './form/newPlayerFields';
import newPlayerSelect from './form/newPlayerSelect';
import { addPlayer } from '../actions';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      rating: 0,
      handedness: 'right',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  handleSelectChange(e) {
    console.log('value: ' + e.target.value);
    this.setState({ handedness: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push('/roster');
    this.props.addPlayer(this.state, this.props.auth.token);
  }

  renderFields() {
    return _.map(newPlayerFields, ({ label, name, type }) => (
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

  renderSelect() {
    return _.map(newPlayerSelect, ({ value, text }) => (
      <option key={value} value={value}>{text}</option>
    ));
  }

  render() {
    if (!this.props.auth) {
      return <Redirect to={{ pathname: '/' }} />;
    }

    const styles = { marginTop: '20px' };
    return (
      <div>
        <h4>Add Player</h4>
        <form onSubmit={this.handleSubmit}>
          {this.renderFields()}
          <label htmlFor="handedness">Handedness</label>
          <select
            id="handedness"
            name="handedness"
            className="browser-default"
            onChange={this.handleSelectChange}
            value={this.state.handedness}
          >
            {this.renderSelect()}
          </select>
          <button
            id="create"
            type="submit"
            className="center-align teal btn-flat right white-text"
            style={styles}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default withRouter(connect(mapStateToProps, { addPlayer })(Player));
