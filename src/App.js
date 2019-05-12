import React, { Component } from "react";
import {
  withRouter
} from "react-router-dom";

import Header from "./components/header/Header";
import NavTop from "./components/header/NavTop";
import NavBottom from "./components/header/NavBottom";
import Main from "./components/main/Main";
import Form from "./components/main/Form";

import { withData } from "./context/dataProvider";
import "./styles.css";



class App extends Component {
  constructor() {
    super();
    this.state = {
      menuToggle: false
    };
  }

  render() {
    return (
      <>
        <Header openDropDown={this.toggleMenu}>
          <NavTop />
          <NavBottom />
        </Header>
        <Form
          handleSearch={this.props.handleSearch}
          handleChange={this.props.handleChange}
          {...this.state}
        />
        <Main />
      </>
    );
  }
}

export default withData(withRouter(App));
