import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../../assets/images/file-missing.png';

function Room({ room }) {
  const { name, slug, images, price } = room;

  return (
    <article>
      <div className="image-container">
        <img src={ images[0] || defaultImage } alt="single room" />
      </div>
    </article>
  );
}

export default Room;