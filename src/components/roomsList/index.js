import React from 'react';
import Room from '../room/index';

import './roomsList.css';

function RoomsList({ rooms }) {

  if ( rooms.length === 0 ) {
    return (
      <div className="empty-search">
        <h3> Unfortunately, no rooms are available in this range. </h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {
          rooms.map( item => {
            return <Room key={item.id} room={item} />
          })
        }
      </div>
    </section>
  );
}

export default RoomsList;
