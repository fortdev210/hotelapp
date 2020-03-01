import React from 'react';
import Hero from '../components/hero/index';
import Banner from '../components/banner/index';

import { Link } from 'react-router-dom';

function Rooms() {
  return (
    <Hero hero="rooms-hero">
      <Banner title="Our Rooms">
        <Link to="/" className="btn-primary"> Return Home </Link>
      </Banner>
    </Hero>
  );
}

export default Rooms;