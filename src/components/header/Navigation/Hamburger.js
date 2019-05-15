import React, { Component } from "react";

import hamburgerMenuImage from "../../../images/hamburgericon.svg";

class Hamburger extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <button>
        <img src={hamburgerMenuImage} alt="" />
      </button>
    );
  }
}

export default Hamburger;
