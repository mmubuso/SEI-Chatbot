import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar.js';
import MainBody from './containers/MainBody';
import EditForm from './components/EditForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={MainBody}/>
          <Route path='/resource/:resourceId/:category/:subjectId' component={EditForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
