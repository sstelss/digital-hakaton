import React from 'react';
import './index.css';
import { Redirect, Link } from 'react-router-dom'
import logo from '../../img/logo.png'

export default function Navbar() {
  return (
    <div className="Navbar">
        <div className="logoBox">
          <a href="/">
            <img src={logo}></img>
          </a>
        </div>

        <div className="menu">
          <ul className="menuElements">
            <li className="menuElement" onClick={()=>alert("About project")}> О проекте </li>
            <li className="menuElement"> <Link to="/orders">Отчеты</Link> </li>
            <li className="menuElement" onClick={()=>alert("Contacs")}> Контакты </li>
          </ul>
        </div>

        <div className="regPanel">
          <ul className="regButtons">
            <li className="button buttonAutorization" onClick={() => alert("Autorization")}>Авторизация</li>
            <li className="button buttonRegistration" onClick={() => alert("Registration")}>Регистрация</li>
          </ul>
        </div>
    </div>
    );
}

