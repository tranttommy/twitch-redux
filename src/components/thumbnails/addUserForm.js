import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class UserForm extends PureComponent {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    username: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  }

  onChange = ({ target }) => {
    this.setState({ username: target.value });
  }


  render() {
    console.log(this.props)
    return (
      <form onSubmit={this.onSubmit}>
        <input placeholder="username here" onChange={this.onChange} />
        <button>SUBMIT</button>
      </form>
    );
  }
}
