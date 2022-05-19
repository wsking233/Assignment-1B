import React, { Component } from "react";
import "../App.css";

class submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };
  }
  //handler for Search Bar
  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value,
    });
  }
  render() {
    return (
      <div className="home">
        <div className="navbar">
          <ul className="navlist">
            <li className="navbtn">
              <a href="/">Return to Homepage</a>
            </li>
          </ul>
        </div>
        <div className="container">
          <h1 className="title">Submit an Article</h1>
          <br />
          {/*title lable*/}
          <label>Title: </label>
          <input  
          className="textbox" 
          onChange={this.handleInputChanged.bind(this)} 
           />
          <br /><br />
          {/*author lable*/}
          <label>Author: </label>
          <input 
          className="textbox"
          onChange={this.handleInputChanged.bind(this)}
           />
          <br /><br />
          {/*year lable*/}
          <label>Year: </label>
          <input
          className="textbox" 
          onChange={this.handleInputChanged.bind(this)} 
           />
          <br /><br />
          {/*source lable*/}
          <label>Source: </label>
          <input className="textbox"
          onChange={this.handleInputChanged.bind(this)}
           /> 
          <br /><br />  
          {/*url lable*/}       
          <label>Url: </label>
          <input  
          className="textbox" 
          onChange={this.handleInputChanged.bind(this)} 
           />
        </div>
        <div>
            <button className="btn">Submit</button>
        </div>
      </div>
    );
  }
}
export default submit;