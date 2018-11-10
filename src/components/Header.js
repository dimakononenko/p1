import React from 'react';
import img from '../images/logo.png';



export default class Header extends React.Component {
  render () {
    return (
      <header className="container">
        <nav>
          <img src={img} id="logo"/>
          <ul className="nav">
            <li><a className="nav-item" ahref="#">Home</a></li>
            <li><a className="nav-item" ahref="#">Products</a></li>
            <li><a className="nav-item" ahref="#">Team</a></li>
            <li><a className="nav-item" ahref="#">Blog</a></li>
            <li><a className="nav-item" ahref="#">Contact</a></li>
          </ul>
          </nav>  
          <button href="#!" className="button" data-micron="bounce">Sign Up</button>
      </header>
    )
  }  
};