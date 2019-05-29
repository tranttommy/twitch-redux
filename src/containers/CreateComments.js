import { connect } from 'react-redux';
import { createComment } from '../actions/commentAction';
import CommentForm from '../components/comments/CommentForm';


const mapDispatchToProps = (dispatch, props) => ({
  onSubmit(comment) {
    dispatch(createComment(comment, props.username));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);
