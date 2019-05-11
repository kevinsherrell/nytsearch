import React, { Component } from "react";
import TopStory from "./TopStory";
import TopStories from "./TopStories";
import { withData } from "./context/dataProvider";
import axios from "axios";
require("dotenv").config();
const apiKey = process.env.REACT_APP_API_KEY;

class FrontPageNews extends Component {
  state = {
    frontPageNews: []
  };
  componentDidMount() {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`
      )
      .then(response => {
        this.setState({
          frontPageNews: response.data.results
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state);
    // console.log(frontPage)
    const mappedFrontPage = this.state.frontPageNews.map((article, key) => {
      return <TopStory {...article} key={article.url} />;
    });

    return (
      <React.Fragment>
       <div className='container'> <div className="newsGrid">{mappedFrontPage}</div></div>
      </React.Fragment>
    );
  }
}

export default withData(FrontPageNews);
