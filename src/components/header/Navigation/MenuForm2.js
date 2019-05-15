import React, { Component } from "react";
import styled from "styled-components";

import ButtonNext from '../../main/Search/ButtonNext'
import ButtonPrevious from '../../main/Search/ButtonPrevious'

import Wrapper_S from '../../styled/Wrapper_S'
import { withData } from "../../../context/dataProvider";
class Form extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      // page: this.props.page
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
    this.props.getArticle(this.state.searchInput, this.props.page);
  };

  
  render() {
    // console.log(this.props)

    return (
      <React.Fragment>
        <SearchForm className="searchForm" onSubmit={this.handleSubmit}>
          <MenuFormWrapper>
            <input
              type="text"
              name="searchInput"
              placeholder="SEARCH"
              onChange={this.handleChange}
              value={this.state.searchInput}
            />
            <button>GO</button>
  
          </MenuFormWrapper>
        </SearchForm>
        
      </React.Fragment>
      
    );
  }
}

const SearchForm = styled.form`
  /* grid-row-start: 2; */
  /* grid-column: span 2; */
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
const SearchNavigation = styled.div`
text-align: center;
width: 100%;
  position: absolute;
  bottom: 0;
  button{
    width: 50%;
  }
`
export default withData(Form);
