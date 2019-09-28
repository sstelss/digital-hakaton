import React from 'react';
import './App.css';

import MainPage from "./views/MainPage"
import UserPanel from './views/UserPanel'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Orders from './views/Orders';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={MainPage} />
        <Route path="/userPanel" component={UserPanel} />
        <Route path="/orders" component={Orders} />

      </div>
    </Router>
  );
}

export default App;
