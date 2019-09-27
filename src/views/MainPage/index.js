import React from 'react';
import './index.css';

import Navbar from "../../components/Navbar"
import UserList from "../../components/UserList"
import { Link } from 'react-router-dom'

function MainPage() {
  return (
    <div className="MainPage">
      <Navbar/>
      <UserList/>
      <Link to="/userPanel">To user panel</Link>
    </div>
  );
}

export default MainPage;