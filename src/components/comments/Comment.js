import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ comment }) {

  return (<p>{comment}</p>);
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired

};
