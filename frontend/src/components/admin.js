import React, { Component } from "react";
import "../App.css";

class search extends Component {
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
          <h1 className="title">Admin System Page</h1>
          <br />
          {/*Admin User Name input*/}
          <label>Admin User Name: </label>
          <input  
          className="textbox" 
          onChange={this.handleInputChanged.bind(this)} 
           />
            <br />
            <br />
            {/*Admin User Name input*/}
           <label>Password: </label>
          <input  
          className="textbox" 
          onChange={this.handleInputChanged.bind(this)} 
           />
        </div>
        <div>
            <button className="btn">Login</button>
        </div>
      </div>
    );
  }
}
export default search;
