import { combineReducers } from 'redux';
import thumbnails from './thumbnailReducer';
import comments from './commentReducer';

export default combineReducers({
  thumbnails,
  comments
});
