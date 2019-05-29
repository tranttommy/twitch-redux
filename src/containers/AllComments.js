import { connect } from 'react-redux';
import Comments from '../components/comments/Comments';
import { getComments } from '../selectors/commentSelectors';
import { deleteComment } from '../actions/commentAction';



const mapStateToProps = (state, props) => {
  return {
    comments: getComments(state, props.username)
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  deleteComment(id) {
    dispatch(deleteComment(id, props.username));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
