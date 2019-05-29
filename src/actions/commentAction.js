export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (comment, username) => ({
  type: CREATE_COMMENT,
  payload: { comment, username }
});
