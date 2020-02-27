import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortRooms: [],
    featuredRooms: [],
    loading: true
  };

  // Function to be used for connecting with external data
  // getData()

  componentDidMount() {
    // this.getData
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    this.setState({
      rooms, 
      featuredRooms, 
      sortedRooms: rooms, 
      loading: false
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

  render() {
    const { featuredRooms: rooms } = this.context;
    console.log(rooms);
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext }; 
