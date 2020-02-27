import React, { Component } from 'react';
import { RoomContext } from '../../Context';
import Loading from '../Loading';
import Room from '../roomComponent/Room';
import Title from '../titleComponent/Title';

class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return (
        <Room key={room.id} room={room} />
      );
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms"/>
        <div className="featured-room-center">
          { loading ? <Loading /> : rooms }
        </div>
        <Loading />
      </section>
    );
  }
}

export default FeaturedRooms;
