import React, { Component } from 'react';
import Title from '../title/index';

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import './services.css';

export class Services extends Component {
  // for icons used in services sections on home page.
  state = {
    services: [
      {
        icon: <FaCocktail/>,
        title: "Good Cocktails",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      },
      {
        icon: <FaHiking/>,
        title: "Hiking Tours",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      },
      {
        icon: <FaShuttleVan/>,
        title: "Shuttle Service",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      },
      {
        icon: <FaBeer/>,
        title: "Best Beer",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      }
    ]
  }

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span> {item.icon} </span>
                <h6> {item.title} </h6>
                <p> {item.info} </p>
              </article>
            );
          })}
        </div>
      </section>
    )
  };
}

export default Services;
