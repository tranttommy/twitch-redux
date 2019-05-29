import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Thumbnail({ username }) {
  return (
    <Link to={`/${username}`}>
      <img src={`https://static-cdn.jtvnw.net/previews-ttv/live_user_${username}-320x180.jpg`} />
    </Link>
  );
}


Thumbnail.propTypes = {
  username: PropTypes.string.isRequired
};
