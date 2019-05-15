import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
require("dotenv").config();
const DataContext = React.createContext();
const apiKey = process.env.REACT_APP_API_KEY;

class DataProvider extends Component {
  state = {
    // frontPageNews: [],
    searchInput: '',
    searchResults: [],
    menuToggle: false,
    page: 0
  };

  getArticle = (searchInput,page) => {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchInput}&api-key=${apiKey}&page=${
          page
        }`
      )
      .then(response => {
        this.setState({
          searchResults: response.data.response.docs,
          searchInput: searchInput
        });
      })
      .catch(error => {
        console.log(error);
      });
    this.props.history.push("/results");
  };

  toggleMenu = event => {
    // event.preventDefault();
    this.setState({
      menuToggle: !this.state.menuToggle
    });
  };

  handlePageUp = (searchInput,page) => {
    this.setState(
      {
        page: this.state.page < 100 ? this.state.page + 1 : 100
      },
      () => {
        this.getArticle(this.state.searchInput, this.state.page);
      }
    );
  };

  handlePageDown = (searchInput, page) => {
    this.setState(
      {
        page: this.state.page > 0 ? this.state.page - 1 : 0
      },
      () => this.getArticle(this.state.searchInput, this.state.page)
    );
  };
  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          getArticle: this.getArticle,
          handleChange: this.handleChange,
          toggleMenu: this.toggleMenu,
          handlePageUp: this.handlePageUp,
          handlePageDown: this.handlePageDown
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
export const withData = C => props => (
  <DataContext.Consumer>
    {value => <C {...props} {...value} />}
  </DataContext.Consumer>
);
export default withRouter(DataProvider);
