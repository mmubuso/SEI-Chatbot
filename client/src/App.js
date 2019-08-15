import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar.js';
import MainBody from './containers/MainBody';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <MainBody />
      </Router>
    </div>
  );
}

export default App;
