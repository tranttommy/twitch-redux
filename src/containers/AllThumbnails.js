import { connect } from 'react-redux';
import Thumbnails from '../components/thumbnails/Thumbnails';
import { getThumbnails } from '../selectors/thumbNailSelectors';


const mapStateToProps = state => {
  return {
    thumbnails: getThumbnails(state)
  };
};

export default connect(
  mapStateToProps
)(Thumbnails);
