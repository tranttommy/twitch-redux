import React from 'react';
import PropTypes from 'prop-types';
import AllComments from '../../containers/AllComments';

function Stream({ username }) {
  return (
    <>
    <iframe
      src={`https://player.twitch.tv/?channel=${username}`}
      frameBorder="0"
      allowFullscreen="true"
      scrolling="no"
      height="378"
      width="620"
    />
      <AllComments username={username} />
      </>
  );
}

Stream.propTypes = {
  username: PropTypes.string.isRequired
};

export default Stream;
