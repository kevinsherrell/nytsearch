import React, { Component } from "react";
import styled from "styled-components";

import ButtonPrevious from './ButtonPrevious'
import ButtonNext from './ButtonNext'

import { withData } from "../../../context/dataProvider";
class Form extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      page: 0
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.getArticle(this.state.searchInput, this.state.page);
  };

  handlePageUp = () => {
    this.setState(
      {
        page: this.state.page < 100 ? this.state.page + 1 : 100
      },
      () => {
        this.props.getArticle(this.state.searchInput, this.state.page);
      }
    );
  };

  handlePageDown = () => {
    this.setState(
      {
        page: this.state.page > 0 ? this.state.page - 1 : 0
      },
      () => this.props.getArticle(this.state.searchInput, this.state.page)
    );
  };
  render() {

    return (
      <SearchForm className="searchForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="searchInput"
          placeholder="search"
          onChange={this.handleChange}
          value={this.state.searchInput}
        />
        <button>GO</button>
        
        <ButtonPrevious handlePageDown={this.handlePageDown}/>
        <ButtonNext handlePageUp={this.handlePageUp}/>
      </SearchForm>
    );
  }
}

const SearchForm = styled.form`
  text-align: center;
`
export default withData(Form);
