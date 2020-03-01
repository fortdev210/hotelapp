import React from 'react';
import loadingGif from '../assets/images/gif/loading-arrow.gif';

function Loading() {
  return (
    <div className="loading">
      <h4> rooms are loading... </h4>
      <img src={loadingGif} alt="" />
    </div>
  );
}

export default Loading;