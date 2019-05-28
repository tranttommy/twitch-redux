import React from 'react';
import PropTypes from 'prop-types';

export default function Thumbnail({ username }) {
  return (
    <img src={`https://static-cdn.jtvnw.net/previews-ttv/live_user_${username}-320x180.jpg`} />
  );
}


Thumbnail.propTypes = {
  username: PropTypes.string.isRequired
};
