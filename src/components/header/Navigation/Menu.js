import React, { Component } from "react";
import styled, { css } from "styled-components";

import { withData } from "../../../context/dataProvider";
import MenuForm from "../../../components/header/Navigation/MenuForm";
import MenuLinks from '../../header/Navigation/MenuLinks'

import logo from "../../../images/newyorktimes.svg";
import close from "../../../images/close-icon.png";

import Wrapper_S from "../../styled/Wrapper_S";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    console.log(this.props);
    return (
      <NavMenu_S
        className={this.props.menuToggle === false ? "menuClosed" : "menuOpen"}
      >
        <Header_S>
          <MenuWrapper_S>
            <MenuLogo_S>
              <ImageContainer1>
                <img src={logo} alt="" />
              </ImageContainer1>
              <ImageContainer2>
                <img src={close} alt="" onClick={this.props.toggleMenu} />
              </ImageContainer2>
            </MenuLogo_S>
          </MenuWrapper_S>
        </Header_S>
          <MenuForm
            handleSearch={this.props.handleSearch}
            handleChange={this.props.handleChange}
          />
          <MenuLinks />
      </NavMenu_S>
    );
  }
}

const NavMenu_S = styled.nav`
  position: absolute;
  top: 0;
  transition: all ease-in 500ms;
  left: 0;
  width: 100vw;
  /* height: 100vh; */
  background-color: white;
  z-index: 1;
  ${props =>
    props.className === "menuClosed" &&
    css`
      top: -5000px;
      height: 0;
      transition: all ease-in 500ms;
    `}
`;
const Header_S = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  // background-color: white;
  border-bottom: 1px solid  #ebebeb;
`;
const MenuLogo_S = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  width: 100%;
  // text-align: center;
  vertical-align: top;
  }
`
const ImageContainer1 = styled.div`
grid-column-start: 2;
padding-left: 10px;
  width: 100%;
  text-align: center;
  align-self: center;
  img {
    width: 200px;
  }
`;
const ImageContainer2 = styled.div`
  width: 10%;
  grid-column-start: 3;
  img {
    width: 25px;
    height: 25px;
  }
`;
const MenuWrapper_S = styled(Wrapper_S)`
  flex-direction: column;
  align-content: center;
`;

export default withData(Menu);
