import React from 'react';
import './hero.css';

function Hero({ children, hero }) {
  return (
    <header className={hero}>
      { children }
    </header>
  );
}

// types of props
Hero.defaultProps = {
  hero: "default-hero"
}

export default Hero;
