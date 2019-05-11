import React from "react";

const Articles = props => {
  const bgImage = `url('${props.multimedia.length &&
    [props.web_url.slice(0, 24), props.multimedia[0].url].join("")}')`;
 
  return (
    <div style={{alignSelf: `${!props.multimedia.length && 'start'}`}} className="frontPageNews">
      <div className="container">
          <img src={props.multimedia.length && [props.web_url.slice(0,24), props.multimedia[55].url].join('')} alt=""/>
        {/* <div style={{backgroundImage: bgImage, padding: `${!props.multimedia.length ? '0': '50%'}`}} className='imageContainer'>
        </div> */}

        <a href={props.web_url} target="blank">
            <h3 style={{fontSize: `${!props.multimedia.length && '40px'}`}} className="frontPageHeadline">{props.headline.main}</h3>
            <p className="abstract">{props.abstract}</p>
          </a>
          <p className='author'>this.{props.byline.original}</p>
      </div>
      

     
    </div>
  );
};

export default Articles;
