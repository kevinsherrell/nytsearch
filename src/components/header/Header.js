import React, { Component } from "react";

import Menu from "./Menu";



class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuToggle: false
    };
  }
  render() {
    // console.log(this.state);

    return (
      <>
        {this.state.menuToggle === true ? <Menu /> : null}
        <header>{this.props.children}</header>
      </>
    );
  }
}

export default Header;
