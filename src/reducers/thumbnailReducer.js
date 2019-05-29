import { ADD_STREAMER, DELETE_STREAMER } from '../actions/thumbnailActions';

const initialState = ['devinnash', 'cdewx'];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_STREAMER:
      return [...state, action.payload];
    case DELETE_STREAMER:
      return state.filter(username => username !== action.payload);
    default:
      return state;
  }
}
