import React, { Component } from "react";
import styled from "styled-components";

import Wrapper_S from '../../styled/Wrapper_S'
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
    // console.log(this.state)
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
    // console.log(this.props)

    return (
      <SearchForm className="searchForm" onSubmit={this.handleSubmit}>
        <MenuFormWrapper>
          <input
            type="text"
            name="searchInput"
            placeholder="SEARCH"
            onChange={this.handleChange}
            value={this.state.searchInput}
          />
          <button onClick={this.props.toggleMenu}>GO</button>
        </MenuFormWrapper>
      </SearchForm>
      
    );
  }
}

const SearchForm = styled.form`
  grid-row-start: 2;
  grid-column: span 2;
  margin-top: 20px;
  height: 35px;
  // text-align: center;
  @media (min-width: 768px) {
    grid-row-start: 1;
    grid-column-start: 2;
    /* grid-column: span 1; */
  }
  input, button{
    border: none;
    border-radius: 5px;
    vertical-align: middle;
  }
  input{
    border: 1px solid rgba(0,0,0,.1);
    margin-right: 10px;
    height: 35px;

    width: 84%;
    font-size: 12px;
    font-family: sans-serif;
    padding-left: 10px;
  }
  button{
    height: 34px;
    width: 12%;
    background-color: rgba(98, 136, 165, .5);
    color: white;
  }
  
`;
const MenuFormWrapper = styled(Wrapper_S)`
  display: block;
  height: 35px;
`
export default withData(Form);
