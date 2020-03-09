import React, { Component } from 'react';
import Hero from '../components/hero/index';
import Banner from '../components/banner/index';
import StyledHero from '../components/StyledHero';

import { RoomContext } from '../Context';
import { Link } from 'react-router-dom';
import defaultBcg from '../assets/images/room-1.jpeg';

class SingleRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    }
  }
  static contextType = RoomContext;


  // componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3> Room could not be found... </h3>
          <Link to="/rooms" className="btn-primary"> Back to Rooms </Link>
        </div>
      );
    }

    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
    return (
      <StyledHero img={images[0] || this.state.defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className="btn-primary"> back to rooms </Link>
        </Banner>
      </StyledHero>
    );
  }
}

export default SingleRoom
