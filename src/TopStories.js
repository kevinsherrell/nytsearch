import React, { Component } from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
class TopStories extends Component {
  state = {
      topStories: []
  };
  componentDidMount() {
    axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`
    )
    .then(response=>{
        this.setState({
            topStories: response.data.results.splice(response.data.results.length-10)
        })
    })
    .catch(errors=>{
        console.log(errors)
    });
  }
  render() {
      console.log(this.state)
    return (
        <div className="topStories">
        </div>
    );
  }
}

export default TopStories;
