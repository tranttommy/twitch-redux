import { CREATE_COMMENT } from '../actions/commentAction';

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

    default:
      return state;
  }
}
