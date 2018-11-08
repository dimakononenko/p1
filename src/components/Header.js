import React, { Component } from 'react';

export default class Header extends React.Component {
  render () {
    return (
      <header className="container">
        <div className="logo"></div>
          <nav>
            <ul>
              <li><a ahref="#">Home</a></li>
              <li><a ahref="#">Product</a></li>
              <li><a ahref="#">Team</a></li>
              <li><a ahref="#">Blog</a></li>
              <li><a ahref="#">Contact</a></li>
            </ul>
          </nav>
      </header>
    )
  }  
};