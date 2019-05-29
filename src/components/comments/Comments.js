import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

export default function Comments({ comments, deleteComment }) {
  const commentsList = comments.map((comment, i) => {
    return (
      <li key={i}>
        <Comment comment={comment} deleteComment={deleteComment} id={i} />
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
  comments: PropTypes.array.isRequired,
  deleteComment: PropTypes.func.isRequired
};
