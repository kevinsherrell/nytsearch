import React, { Component } from "react";
class TopStory extends Component {
  state = {};
  render() {
    const multimedia = { ...this.props.multimedia[4] };
    return (
      <div className="frontPageNews">
        <div className="container">
          <div>
            <img className="frontPageImage" src={multimedia.url} alt="" />
            <sub className="imageCopyright container">
              {this.props.copyright}
            </sub>
          </div>

          <a href={this.props.url} target="blank">
            <h3 className="frontPageHeadline">{this.props.title}</h3>
            <p className="abstract">{this.props.abstract}</p>
          </a>
          <p className="author">this.{this.props.byline}</p>
        </div>
      </div>
    );
  }
}

export default TopStory;
