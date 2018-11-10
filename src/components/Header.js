import React from 'react';
import img from '../images/logo.png';
import main_illustration from '../images/main_illustration.png';



export default class Header extends React.Component {
  render () {
    return (
      <header className="container">
        <nav>
          <img src={img} id="logo"/>
          <ul>
            <li><a ahref="#">Home</a></li>
            <li><a ahref="#">Products</a></li>
            <li><a ahref="#">Team</a></li>
            <li><a ahref="#">Blog</a></li>
            <li><a ahref="#">Contact</a></li>
          </ul>
        </nav>  
        <button href="#!" className="button" data-micron="bounce">Sign Up</button>
        <img src={main_illustration} id="illustration"/>
        </header>
    )
  }  
};