import React, { Component } from "react";
import styled from 'styled-components'
import Menu from "./Navigation/Menu";



class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuToggle: false
    };
  }
  render() {

    return (
      <>
        {this.state.menuToggle === true ? <Menu /> : null}
        <header>{this.props.children}</header>
      </>
    );
  }
}

export default Header;

