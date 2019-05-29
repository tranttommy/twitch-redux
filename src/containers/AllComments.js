import { connect } from 'react-redux';
import Comments from '../components/comments/Comments';
import { getComments } from '../selectors/commentSelectors';


const mapStateToProps = (state, props) => {
  return {
    comments: getComments(state, props.username)
  };
};

export default connect(
  mapStateToProps
)(Comments);
