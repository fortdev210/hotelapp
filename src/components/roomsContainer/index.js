import React from 'react';
import RoomsFilter from '../roomsFilter/index';
import RoomsList from '../roomsList/index';

function RoomsContainer() {
  return (
    <div>
      Hello from rooms container;
      <RoomsFilter />
      <RoomsList />
    </div>
  );
}

export default RoomsContainer;
