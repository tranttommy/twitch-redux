import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';

export default function Thumbnails({ thumbnails }) {
  const thumbnailList = thumbnails.map(username => (
    <li key={username}>
      <Thumbnail username={username} />
    </li>
  ));
  return (
    <ul>
      {thumbnailList}
    </ul>
  );
}

Thumbnails.propTypes = {
  thumbnails: PropTypes.array.isRequired
};
