import React, { Component } from "react";
import {withData} from './context/dataProvider'
class Form extends Component {
  constructor() {
    super();
    this.state = {
        searchInput: ''
    };
  }
  handleChange = e => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log(this.state)
  };
  handleSubmit = e=>{
      e.preventDefault()
      this.props.getArticle(this.state.searchInput)
  }
  render() {
    // console.log(this.props)

    return (
      <div className="container" >
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="searchInput"
            placeholder="search"
            onChange={this.handleChange}
            value={this.state.searchInput}
          />
          <button>GO</button>
        </form>
      </div>
    );
  }
}

export default withData(Form);
