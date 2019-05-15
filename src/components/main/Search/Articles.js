import React from "react";
import styled from "styled-components";
import Wrapper_S from "../../styled/Wrapper_S";
const Articles = props => {
  const bgImage = `url('${props.multimedia.length &&
    [props.web_url.slice(0, 24), props.multimedia[0].url].join("")}')`;

  return (
    <ArticleWrapper>
        <ImgWrapper>
          <img
            src={
              props.multimedia.length &&
              [props.web_url.slice(0, 24), props.multimedia[42].url].join("")
            }
            alt=""
          />
        </ImgWrapper>

        <a href={props.web_url} target="blank">
          <h3 className="frontPageHeadline">{props.headline.main}</h3>
          <p className="abstract">{props.abstract}</p>
          <p className="author">this.{props.byline.original}</p>
        </a>
    </ArticleWrapper>
  );
};
const ArticleWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  display: grid;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  img {
    width: 100%;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
`;
export default Articles;
