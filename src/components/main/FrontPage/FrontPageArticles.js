import React, { Component } from "react";
import styled from "styled-components";
import Wrapper_S from "../../styled/Wrapper_S";

class FrontPageArticles extends Component {
  state = {};
  render() {
    const business = { ...this.props };
    const multimedia = { ...this.props.multimedia[4] };

    return (
      <Container_style>
        <ImageContainer>
          <img className="frontPageImage" src={multimedia.url} alt="" />
          <sub className="imageCopyright container">{this.props.copyright}</sub>
        </ImageContainer>
        <TextContainer>
          <a href={this.props.url} target="blank">
            <h3 className="frontPageHeadline">{this.props.title}</h3>
            <p className="abstract">{this.props.abstract}</p>
          </a>
          <p className="author">{this.props.byline}</p>
        </TextContainer>
      </Container_style>
    );
  }
}
const Container_style = styled.div``;
const FrontPageArticleWrapper = styled(Wrapper_S)`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  display: grid;
  grid-gap: 5px;
  @media only screen and (min-width: 2560px) {
    width: 90%;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;
const TextContainer = styled.div`
  width: 100%;
`;
export default FrontPageArticles;
