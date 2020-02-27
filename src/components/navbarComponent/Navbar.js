import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './navbar.css';

class Navbar extends Component {
  // Before arrow functions, binding of "this" was done like this.
  // constructor() {
  //   super();
  //   this.state = { toggle: false };
  //   this.handleToggle = this.handleToggle.bind(this);
  // }

  state = {
    isOpen: false
  }

  handleToggle = () => {
    this.setState({ isOpen:!this.state.isOpen });
  } 

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/"> Resort App </Link>
            <button type="button" className="nav-btn" onClick={this.handleToggle} >
              <FaAlignRight className="nav-icon"/>
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links" }>
            <Link to="/"> Home </Link>
            <Link to="/rooms"> Rooms </Link>
            <Link to="/"> Contact Us </Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
