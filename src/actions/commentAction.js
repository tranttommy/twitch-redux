export const CREATE_COMMENT = 'CREATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const createComment = (comment, username) => ({
  type: CREATE_COMMENT,
  payload: { comment, username }
});
export const deleteComment = (id, username) => ({
  type: DELETE_COMMENT,
  payload: { id, username }
});
