import { connect } from 'react-redux';
import UserForm from '../components/thumbnails/UserForm';
import { addStreamer } from '../actions/thumbnailActions';

const mapDispatchToProps = (dispatch) => ({
  onSubmit(username) {
    dispatch(addStreamer(username));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(UserForm);
