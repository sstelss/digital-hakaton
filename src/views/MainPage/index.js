import React from 'react';
import './index.css';

import Navbar from "../../components/Navbar"
import MainInfoBlock from "../../components/MainInfoBlock"
import { Link } from 'react-router-dom'

function MainPage() {
  return (
    <div className="MainPage">
      <Navbar/>
      <MainInfoBlock/>
      <Link to="/userPanel">To user panel</Link>
    </div>
  );
}

export default MainPage;