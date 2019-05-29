import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

export default function Comments({ comments }) {
  const commentsList = comments.map((comment, i) => {
    return (
      <li key={i}>
        <Comment comment={comment} />
      </li>
    );
  });
  
  return (
    <ul>
      {commentsList}
    </ul>
  );
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};
