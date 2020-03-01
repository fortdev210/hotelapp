import React from 'react';
import Hero from '../components/hero/index';
import Banner from '../components/banner/index';

import { Link } from 'react-router-dom';

function Error() {
  return (
    <Hero>
      <Banner title="404" subtitle="Page not found">
        <Link to="/" className="btn-primary"> Return Home </Link>
      </Banner>
    </Hero>
  )
}

export default Error;
