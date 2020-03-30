import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  // Function to be used for connecting with external data
  // getData()

  componentDidMount() {
    // this.getData
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map( item => item.price ));
    let maxSize = Math.mac(...rooms.map( item => item.size));

    this.setState({
      rooms, 
      featuredRooms, 
      sortedRooms: rooms, 
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    })
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = {...item.fields, images, id};

      return room;
    });

    return tempItems;
  }

  // For individual rooms url
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug)
    return room;  
  }

  handleChange = (event) => { 
    const type = event.target.type;
    const name = event.target.type;
    const value = event.target.type;
    console.log(type,name,value);
  }

  filterRooms = () => {
    console.log();
  }

  render() {
    const { featuredRooms: rooms } = this.context;
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

// in case of hooks 
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        { value => <Component {...props} context={value} /> }
      </RoomConsumer>
    );
  }
}

export { RoomProvider, RoomConsumer, RoomContext }; 
