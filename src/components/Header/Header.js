import React from 'react';
import img from '../../images/logo.png';
import main_illustration from '../../images/main_illustration.png';
import { HeaderContainer, Logo, Button, Img } from './Header.styles';


// Using of styled-components
export default () => (
  <HeaderContainer>
    <Logo src={img} id="logo"/>
    <ul>
      <li><a ahref="#">Home</a></li>
      <li><a ahref="#">Products</a></li>
      <li><a ahref="#">Team</a></li>
      <li><a ahref="#">Blog</a></li>
      <li><a ahref="#">Contact</a></li>
    </ul>
    <Button data-micron="bounce">Sign Up</Button>
    <Img src={main_illustration} id="illustration"></Img>
  </HeaderContainer>
)