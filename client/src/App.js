import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
      </Router>
    </div>
  );
}

export default App;
