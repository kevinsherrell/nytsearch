import React from "react";

import styled from "styled-components";
import {Link} from 'react-router-dom'

import Wrapper_S from "../../styled/Wrapper_S";
import MenuForm2 from "./MenuForm2";
import { withData } from "../../../context/dataProvider";
const NavBottom = props => {
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
    <NavStyled>
      <NavWrapper>
        <p className="date">
          {getDay}, {getMonth} {getDate} {getYear}
        </p>
        <p className="bottomNavRight">
          <Link to='/'>HOME</Link> <span>|</span> <a href="#">LOG IN</a>
        </p>
        <MenuForm2 />
      </NavWrapper>
    </NavStyled>
  );
};
const NavWrapper = styled(Wrapper_S)`
  display: grid;
  font-size: 13px;
  /* grid-template-rows: 1fr 1fr; */
  align-items: center;

  p {
    text-align: left;
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
    grid-template-columns: 2fr 6fr 2fr;
    p:nth-child(2){
      display: block;
    }
  }
`;
const NavStyled = styled.nav`
  padding-top: 15px;
  padding-bottom: 10px;
  background-color: RGB(247, 247, 247);
`;
export default withData(NavBottom);
