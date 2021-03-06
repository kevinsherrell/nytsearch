import React, { Component } from "react";
import ArticleContainer from "./ArticleContainer";
import ButtonNext from "./ButtonNext";
import ButtonPrevious from "./ButtonPrevious";
import styled from "styled-components";
import Wrapper_S from "../../styled/Wrapper_S";
import { withData } from "../../../context/dataProvider";
class Results extends Component {
  state = {
    searchResults: this.props.searchResults
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      searchResults: nextProps.searchResults
    });
  }



  render() {
    const mappedResults = this.props.searchResults.map((result, i) => {
      return <ArticleContainer {...result} key={result._id} />;
    });
    return (
      <React.Fragment>
       
        <SearchNavWrapper>
          <NewsGrid>{mappedResults}</NewsGrid>
        </SearchNavWrapper>
      </React.Fragment>
    );
  }
}
const SearchNavigation = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  @media (min-width: 768px) {
    position: inherit;
  }
`;
const SearchNavWrapper = styled(Wrapper_S)`
  text-align: center;
  /* margin-top: 20px; */
  margin-bottom: 10px;
  button {
    border: none;
    padding: 8px;
    border-radius: 15px;
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
export default withData(Results);
