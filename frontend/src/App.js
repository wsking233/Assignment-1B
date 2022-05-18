import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Homepage from './components/home';
import Searchpage from './components/articleSearch'
import Submitpage from './components/submit'
import adminpage from './components/admin'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Homepage} />
          <Route path='/articleSearch' component={Searchpage}/>
          <Route path='/submit' component={Submitpage}/>
          <Route path='/admin' component={adminpage} />
        </div>
      </Router>
    );
  }
}

export default App;
