import React from 'react';
import RoomsFilter from '../roomsFilter/index';
import RoomsList from '../roomsList/index';
import Loading from '../Loading';

import { withRoomConsumer } from '../../Context';

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />
  }    

  return (
    <div>
      Hello from rooms container;
      <RoomsFilter rooms ={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );  
}

export default withRoomConsumer(RoomsContainer);




// old way to do it (before hooks)

// import React from 'react';
// import RoomsFilter from '../roomsFilter/index';
// import RoomsList from '../roomsList/index';
// import Loading from '../Loading';

// import { RoomConsumer } from '../../Context';


// function RoomsContainer() {

//   return (
//     <RoomConsumer>
//       {
//         (value) => {
//           const { loading, sortedRooms, rooms } = value;

//           if (loading) {
//             return <Loading />
//           }   

//           return (
//             <div>
//               Hello from rooms container;
//               <RoomsFilter rooms={rooms} />
//               <RoomsList rooms={sortedRooms} />
//             </div>
//           );
//         }
//       }
//     </RoomConsumer>
//   );
// }

// export default RoomsContainer;
