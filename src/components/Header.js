import React, { Component } from 'react';
import img from '../images/logo.png';
import main_illustration from '../images/main_illustration.png';
import styled from 'styled-components';


const Header = styled.div`
  border: #000000 solid;
`
const Nav = styled.nav`
  font-family: Chivo;
`

const Button = styled.button`
  border: 1px solid #FFFFFF;
  font-family: Chivo-Regular;
  min-height: 48px;
  min-width: 128px;
  text-align: center;
  font-size: 16px;
  color: #F1F8E9;
  border-radius: 5px;
  background: none;
  position: relative;
  margin-right: 20px;
  `
  const Img = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    max-width: 660px;
    width: 60%;
  `


export default () => (
  <Header>
    <Nav>
      <img src={img} id="logo"/>
      <div className="nav-toggle">
        <div className="nav-toggle-bar"></div>
      </div>
      <ul className="nav">
        <li><a ahref="#">Home</a></li>
        <li><a ahref="#">Products</a></li>
        <li><a ahref="#">Team</a></li>
        <li><a ahref="#">Blog</a></li>
        <li><a ahref="#">Contact</a></li>
      </ul>
      <Button data-micron="bounce">Sign Up</Button>
    </Nav>
    <Img src={main_illustration} id="illustration"></Img>
  </Header>
)
    
// <img src={main_illustration} id="illustration"/>        
// <button href="#!" className="button" data-micron="bounce">Sign Up</button>