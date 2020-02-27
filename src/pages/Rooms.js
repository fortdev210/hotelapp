import React from 'react';
import Hero from '../components/heroComponent/Hero';
import Banner from '../components/bannerComponent/Banner';

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