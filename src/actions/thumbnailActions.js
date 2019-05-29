export const ADD_STREAMER = 'ADD_STREAMER';
export const addStreamer = username => ({
  type: ADD_STREAMER,
  payload: username
});

export const DELETE_STREAMER = 'DELETE_STREAMER';
export const deleteStreamer = username => ({
  type: DELETE_STREAMER,
  payload: username
});
