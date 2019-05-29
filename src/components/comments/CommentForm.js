import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    comment: ''
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.comment);
  }

  handleComment = ({ target }) => {
    this.setState({ comment: target.value });
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <textarea value={this.state.comment} onChange={this.handleComment} />
        <button>submit</button>
      </form>
    );
  }
}
