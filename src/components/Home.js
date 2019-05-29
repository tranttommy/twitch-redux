import React from 'react';
import AllThumbnails from '../containers/AllThumbnails';
import CreateThumbnail from '../containers/CreateThumbnail';


export default function Home() {
  return (
    <>
      <CreateThumbnail />
      <AllThumbnails />
    </>
  );
}
