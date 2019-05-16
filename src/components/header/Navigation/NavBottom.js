import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Wrapper_S from "../../styled/Wrapper_S";
import MenuForm2 from "./MenuForm2";
import ButtonNext from "../../main/Search/ButtonNext";
import ButtonPrevious from "../../main/Search/ButtonPrevious";
import { withData } from "../../../context/dataProvider";

class NavBottom extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    if (window.scrollY > 138) {
      this.bottomNav.classList.add("scrolled");
      // this.hamburgerButton.classList.remove("hamburgerButton");
      // this.hamburgerButton.classList.add("scrolledButton");
      console.log(window.scrollY);
    } else if (window.scrollY < 138) {
      this.bottomNav.classList.remove("scrolled");
      // this.hamburgerButton.classList.remove("scrolledButton");
      // this.hamburgerButton.classList.add("hamburgerButton");
    }
    // if (this.state.menuClicked === true) {
    //   this.setState({
    //     menuClicked: !this.state.menuClicked
    //   });
    // }
  };
  render() {
    let newDate = new Date();
    let weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let getDay = weekday[newDate.getDay()];
    let getDate = newDate.getDate();
    let getMonth = month[newDate.getMonth()];
    let getYear = newDate.getFullYear();
    return (
      <React.Fragment>
        <NavStyled ref={c => (this.bottomNav = c)}>
          <NavWrapper className="navWrapper">
            <MenuForm2 />
            <SearchNavWrapper>
              <ButtonPrevious />
              <ButtonNext />
            </SearchNavWrapper>
          </NavWrapper>
          {/* <SearchNavigation ref={div=>this.searchNav = div} >
            <SearchNavWrapper>
              <ButtonPrevious />
              <ButtonNext />
            </SearchNavWrapper>
          </SearchNavigation> */}
        </NavStyled>
      </React.Fragment>
    );
  }
}

const NavWrapper = styled(Wrapper_S)`
  display: grid;
  font-size: 13px;
  /* grid-template-rows: 1fr 1fr; */
  align-items: center;

  p {
    text-align: center;
    padding-bottom: 10px;
    width: 100%;
  }
  p:nth-child(2) {
    display: none;
    text-align: right;
    padding-left: 15px;
  }
  a {
    font-size: 9px;
  }
  @media (min-width: 768px) {
    grid-template-columns: 4fr 1fr;
    padding-bottom: 15px;
    p:nth-child(2) {
      display: block;
    }
  }
`;
const NavStyled = styled.nav`
  padding-top: 15px;
  /* padding-bottom: 10px; */
  background-color: RGB(247, 247, 247);
`;

const SearchNavigation = styled.div`
  padding-top: 10px;
  width: 100%;
  /* position: relative;
  top: 0; */
  @media (min-width: 768px) {
    p:first-child {
      display: block;
    }
  }
`;
const SearchNavWrapper = styled(Wrapper_S)`
  text-align: center;
  /* margin-top: 20px; */
  margin-bottom: 10px;
  padding-top: 5px;

  a {
    width: 50%;
  }
  a:first-child {
    margin-right: 5px;
  }
  button {
    display: block;
    border: none;
    padding: 8px;
    border-radius: 5px;
    width: 100%;
    color: white;
    background-color: rgba(98, 136, 165, 0.5);
  }
  @media (min-width: 768px) {
    grid-column-start: 2;
    grid-row-start: 1;
    padding-top: 0;
    grid-column: span 3;
    align-self: flex-end;
    vertical-align: middle;
    margin-bottom: 0;

    button{
      height: 34px;
    }
  }
`;
export default withData(NavBottom);
