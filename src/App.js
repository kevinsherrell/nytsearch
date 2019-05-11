import React, { Component } from "react";
import {
  withRouter
} from "react-router-dom";

import Header from "./Header";
// import Menu from './Menu'
import Form from "./Form";
import NavBottom from "./NavBottom";
import Main from "./Main";



import { withData } from "./context/dataProvider";
import "./styles.css";

import NavTop from "./NavTop";


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
