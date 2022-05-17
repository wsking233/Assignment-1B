import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Homepage from './components/home';
import Searchpage from './components/articleSearch'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Homepage} />
          <Route path='/articleSearch' component={Searchpage}/>
        </div>
      </Router>
    );
  }
}

export default App;
