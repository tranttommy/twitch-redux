import { connect } from 'react-redux';
import Thumbnails from '../components/thumbnails/Thumbnails';
import { getThumbnails } from '../selectors/thumbNailSelectors';
import { deleteStreamer } from '../actions/thumbnailActions';


const mapStateToProps = state => {
  return {
    thumbnails: getThumbnails(state)
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    deleteThumbnail(username) {
      dispatch(deleteStreamer(username));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Thumbnails);
