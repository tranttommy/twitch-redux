import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ comment, deleteComment, id }) {

  return (<p>{comment}<button onClick={deleteComment.bind(null, id)}>X</button></p>);
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};
