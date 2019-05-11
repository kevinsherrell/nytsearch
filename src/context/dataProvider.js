import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

const DataContext = React.createContext();
const apiKey = process.env.API_KEY;

class DataProvider extends Component {
  state = {
    // frontPageNews: [],
    searchResults: []
  };

  getArticle = (searchInput) => {
 

    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchInput}&api-key=${apiKey}`
      )
      .then(response => {
        this.setState({
          searchResults: response.data.response.docs
        });
      })
      .catch(error => {
        console.log(error);
      });
    this.props.history.push("/results");
  };
 
  toggleMenu = event => {
    event.preventDefault();
    this.setState({
      menuToggle: true
    });
  };
  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          getArticle: this.getArticle,
          handleChange: this.handleChange,
          toggleMenu: this.toggleMenu
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
export const withData = C => props => (
    <DataContext.Consumer>
        {value => <C {...props}{...value}/>}
    </DataContext.Consumer>
)
export default withRouter(DataProvider);
