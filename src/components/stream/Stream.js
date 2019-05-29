import React from 'react';
import PropTypes from 'prop-types';

function Stream({ username }) {
  return (
    <iframe
      src={`https://player.twitch.tv/?channel=${username}`}
      frameBorder="0"
      allowFullscreen="true"
      scrolling="no"
      height="378"
      width="620"
    />
  );
}

Stream.propTypes = {
  username: PropTypes.string.isRequired
};

export default Stream;
