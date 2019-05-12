import React, { Component } from "react";
import {withData} from '../../context/dataProvider'
class Form extends Component {
  constructor() {
    super();
    this.state = {
        searchInput: '',
        page: 0
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
      this.props.getArticle(this.state.searchInput, this.state.page)
  }
 
  handlePageUp = () => {
   this.setState({
      page: this.state.page < 100 ? (this.state.page +1) : 100

   },()=>{this.props.getArticle(this.state.searchInput, this.state.page)})
  };
  
  handlePageDown = () => {
    this.setState({
      page: this.state.page > 0 ? (this.state.page -1) : 0
    }, ()=>this.props.getArticle(this.state.searchInput, this.state.page))
  };
  render() {
    // console.log(this.props)

    return (
      <div className=" formContainer container" >
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
        <button className="previous" onClick={this.handlePageDown}>Previous</button>
        <button className="next" onClick={this.handlePageUp}>Next</button>
      </div>
    );
  }
}

export default withData(Form);