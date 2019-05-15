import React, { Component } from "react";
import styled from "styled-components";

import { withData } from "../../../context/dataProvider";

import Menu from "../../header/Navigation/Menu";

import Wrapper_S from "../../styled/Wrapper_S";

import logo from "../../../images/newyorktimes.svg";
import hamburger from "../../../images/hamburgerIcon.svg";
import login from "../../../images/signinIcon.svg";

const NavMenu = props => {
  if (this.props.menuToggle === true) {
    return <Menu />;
  }
};

class NavTop extends Component {
  state = {};
  render() {
    return (
      <NavStyled>
        <Wrapper_S_NavTop>
          <ImageWrapper_S style={{textAlign: 'left'}}onClick={this.props.toggleMenu} left>
            <Hamburger_S type="image" src={hamburger} />
          </ImageWrapper_S>

          <ImageWrapper_S style={{textAlign: 'center'}}logo>
            <Logo_S src={logo} alt="" />
          </ImageWrapper_S>

          <ImageWrapper_S style={{textAlign: 'right'}}>
            <SignIn_S type="image" src={login} right />
          </ImageWrapper_S>
          {/* {this.props.menuToggle === true && <Menu />} */}
          <Menu />
        </Wrapper_S_NavTop>
      </NavStyled>
    );
  }
}
const NavStyled = styled.nav`
  border-bottom: 1px solid #ebebeb;
`;
const Logo_S = styled.img`
  width: 200px;
  align-self: flex-start;
  text-align: center;
`;
const Hamburger_S = styled.input`
  width: 18px;
  align-self: center;
  text-align: left;
  margin-left: auto;
`;
const SignIn_S = styled.input`
  width: 16px;
  align-self: center;
  // text-align: right;
  // float: right;
`;
const Wrapper_S_NavTop = styled(Wrapper_S)`
  padding-top: 15px;
  padding-bottom: 5px;
  align-items: center;
`;
const ImageWrapper_S = styled.div`
  text-align: 'center';
  width: ${props => (props.logo ? "90%" : "5%")};
`;

// const NavTop_S = styled.nav`
//   background-color: ;
// `;
export default withData(NavTop);
