//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="title">Disney Memory Game</li>
          <li className="center"></li>
          <li className="score">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;