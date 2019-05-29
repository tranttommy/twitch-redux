import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentAction';

const initialState = {

};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        [action.payload.username]: [
          ...(state[action.payload.username] || []), action.payload.comment
        ]
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [action.payload.username]: [
          ...state[action.payload.username].slice(0, action.payload.id),
          ...state[action.payload.username].slice(action.payload.id + 1),
        ]
      };

    default:
      return state;
  }
}
