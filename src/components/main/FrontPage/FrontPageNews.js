import React, { Component } from "react";
import axios from "axios";

import styled from "styled-components";
import Wrapper_S from "../../styled/Wrapper_S";
import { withData } from "../../../context/dataProvider";

import FrontPageArticles from "./FrontPageArticles";
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
    const mappedFrontPage = this.state.frontPageNews.map((article, key) => {
      return <FrontPageArticles {...article} key={article.url} />;
    });

    return (
      <React.Fragment>
        {/* <div className="container">
          {" "}
          <div className="newsGrid">{mappedFrontPage}</div>
        </div> */}

        <FrontPageWrapper>
          <NewsGrid>{mappedFrontPage}</NewsGrid>
        </FrontPageWrapper>
      </React.Fragment>
    );
  }
}
const SearchNavigation = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
`;
const FrontPageWrapper = styled(Wrapper_S)`
  button {
    width: 100%;
  }
`;
const NewsGrid = styled.div`
  display: grid;
  grid-gap: 15px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export default withData(FrontPageNews);
