import React from 'react';
import Hero from '../components/hero/index';
import Banner from '../components/banner/index';
import Services from '../components/services/index';
import FeaturedRooms from '../components/featuredRooms/index';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Hero>
        <Banner title="Luxurios Rooms" subtitle="Deluxe rooms starting at $299">
          <Link to="/rooms" className="btn-primary"> Our Rooms </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}

export default Home;
