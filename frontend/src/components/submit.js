import React, { Component } from "react";
import "../App.css";

class submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      year: "",
      source: "",
      url: ""
    };
  }
  //handler for title input
  handleInputTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }
  //handler for author input
  handleInputAuthor(event) {
    this.setState({
      author: event.target.value,
    });
  }
    //handler for year input
  handleInputYear(event) {
    this.setState({
      year: event.target.value,
    });
  }
    //handler for source input
  handleInputSource(event) {
    this.setState({
      source: event.target.value,
    });
  }
    //handler for url input
  handleInputUrl(event) {
    this.setState({
      url: event.target.value,
    });
  }

  handleSubmit(event){
    alert("Title is: "+this.state.title);
    alert("Author is: "+this.state.title);
    alert("Year is: "+this.state.title);
    alert("Source is: "+this.state.title);
    alert("URL is: "+this.state.title);
    event.preventDefault();
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
          <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Title: </label>
          <input  
          className="textbox" 
          onChange={this.handleInputTitle.bind(this)} 
          value={this.state.title}
           />
          <br /><br />
          {/*author lable*/}
          <label>Author: </label>
          <input 
          className="textbox"
          onChange={this.handleInputAuthor.bind(this)}
          value={this.state.author}
           />
          <br /><br />
          {/*year lable*/}
          <label>Year: </label>
          <input
          className="textbox" 
          onChange={this.handleInputYear.bind(this)} 
          value={this.state.year}
           />
          <br /><br />
          {/*source lable*/}
          <label>Source: </label>
          <input className="textbox"
          onChange={this.handleInputSource.bind(this)}
          value={this.state.source}
           /> 
          <br /><br />  
          {/*url lable*/}       
          <label>Url: </label>
          <input  
          className="textbox" 
          onChange={this.handleInputUrl.bind(this)} 
          value={this.state.url}
           />
          <div>
          <button className="btn">Submit</button>
          </div>
          </form>
        </div>
      </div>
    );
  }
}
export default submit;