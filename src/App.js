import React from 'react';
import './App.css';

import MainPage from "./views/MainPage"
import UserPanel from './views/UserPanel'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={MainPage} />
        <Route path="/userPanel" component={UserPanel} />
      </div>
    </Router>
  );
}

export default App;
