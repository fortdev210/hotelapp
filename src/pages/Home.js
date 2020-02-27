import React from 'react';
import Hero from '../components/heroComponent/Hero';
import Banner from '../components/bannerComponent/Banner';
import Services from '../components/servicesComponent/Services';
import FeaturedRooms from '../components/featuredRoomsComponent/FeaturedRooms';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Hero>
        <Banner title="Luxurios Rooms" subtitle="Deluxe rooms starting at $299">
          <Link to="/rooms" className="btn-primary"> Our Rooms </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </div>
  );
}

export default Home;
