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

  // below lifecycle can be used to fetch data from API in this case.
  // componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if ( !room ) {
      return (
        <div className="error">
          <h3> Room could not be found... </h3>
          <Link to="/rooms" className="btn-primary"> Back to Rooms </Link>
        </div>
      );
    }

    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
    return (
      <>
        <StyledHero img={ images[0] || this.state.defaultBcg }>
          <Banner title={ `${name} room` }>
            <Link to='/rooms' className="btn-primary"> back to rooms </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            { images.map(( item, index ) => {
              return <img key={index} src={item} alt={name} />
            }) }  
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3> Details </h3>
              <p> {description} </p>
            </article>
            <article className="info">
              <h3> Info </h3>
              <h6> Price : ${price} </h6>
              <h6> Size : ${size} SQFT </h6>
              <h6>
                Max Capacity : {
                  capacity > 1 ? `${capacity} people` : `${capacity} person`
                } 
              </h6>
              <h6>
                { pets ? "pets allowed" : "no pets allowed"}
              </h6>
              <h6>
                { breakfast && "free breakfast included"}
              </h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h4> Extras </h4>
          <ul className="extras">
            { extras.map(( item, index ) => {
              return <li key={index} > - {item} </li>
            }) }
          </ul>
        </section>
    </>
    );
  }
}

export default SingleRoom
