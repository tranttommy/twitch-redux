import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';

export default function Thumbnails({ thumbnails, deleteThumbnail }) {
  const thumbnailList = thumbnails.map(username => (
    <li key={username}>
      <Thumbnail username={username} deleteThumbnail={deleteThumbnail} />
    </li>
  ));
  return (
    <ul>
      {thumbnailList}
    </ul>
  );
}

Thumbnails.propTypes = {
  thumbnails: PropTypes.array.isRequired,
  deleteThumbnail: PropTypes.func.isRequired
};
