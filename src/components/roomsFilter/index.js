import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../../Context';
import Title from '../title/index';

import './roomsFilter.css';

// get all unique value
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
}

function RoomsFilter({rooms}) {
  const context = useContext(RoomContext);
  const { 
    handleChange, 
    type, 
    capacity, 
    price, 
    minPrice, 
    maxPrice, 
    minSize, 
    maxSize, 
    breakfast,
    pets 
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");

  // add all
  types = ["all", ...types];

  // map to JSX
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}> {item} </option>
      );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}> {item} </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type"> Rooms type </label>
          <select 
            name="type" 
            id="type" 
            value={type} 
            className="form-control" 
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}

        {/* select capacity */}
        <div className="form-group">
          <label htmlFor="capacity"> Guests </label>
          <select 
            name="capacity" 
            id="capacity" 
            value={capacity} 
            className="form-control" 
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end select capacity */}

        {/* room price */}
        <div className="form-group">
          <label htmlFor="price"> Room price ${price} </label>
          <input 
            type="range" 
            name="price" 
            min={minPrice} 
            max={maxPrice} 
            id="price" 
            value={price} 
            onChange={handleChange} 
            className="form-control"
          />
        </div>
        {/* end room price */}

        {/* size */}
        <div className="form-group">
          <label htmlFor="size"> Room size </label>
          <input 
            type="number"
            name="minSize"
            id="size"
            value={minSize}
            onChange={handleChange}
            className="size-input"
          />
          <input 
            type="number"
            name="maxSize"
            id="size"
            value={maxSize}
            onChange={handleChange}
            className="size-input"
          />
        </div>
        {/* end size */}

        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input 
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast"> Breakfast </label>
          </div>
          <div className="single-extra">
            <input 
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets"> Pets </label>
          </div>
        </div>
        {/* end extras */}
      </form>
    </section>
  );
}

export default RoomsFilter;
