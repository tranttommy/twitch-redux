import React from 'react';
import PropTypes from 'prop-types';
import Stream from '../components/stream/Stream';

export default function StreamerDetail({ match }) {
  return (
    <Stream username={match.params.username} />
  );
}

StreamerDetail.propTypes = {
  match: PropTypes.object.isRequired
};
