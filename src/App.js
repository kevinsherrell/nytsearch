import React, { Component } from "react";
import {
  withRouter
} from "react-router-dom";

import Header from "./components/header/Header";
import NavTop from "./components/header/Navigation/NavTop";
import NavBottom from "./components/header/Navigation/NavBottom";
import Main from "./components/main/Main";
import Form from "./components/main/Search/Form";

import { withData } from "./context/dataProvider";

import Grid_S from './components/styled/Grid_S.js'

import "./styles.css";



class App extends Component {
  constructor() {
    super();
    this.state = {
      menuToggle: true
    };
  }

  render() {
    return (
      <>
        <Header openDropDown={this.toggleMenu}>
          <NavTop />
          <NavBottom />
        </Header>
        
        <Main />
      </>
    );
  }
}

export default withData(withRouter(App));
