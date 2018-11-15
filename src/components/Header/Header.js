import React from 'react';
import img from '../../images/logo.png';
import main_illustration from '../../images/main_illustration.png';
import { HeaderContainer, Logo, Button, Img, Ul, Li, A, LogoNavHolder } from './Header.styles';


// Using of styled-components
export default () => (
  <HeaderContainer>
    <LogoNavHolder>
      <Logo src={img} id="logo"/>
      <Ul>
        <Li><A ahref="#">Home</A></Li>
        <Li><A ahref="#">Product</A></Li>
        <Li><A ahref="#">Team</A></Li>
        <Li><A ahref="#">Blog</A></Li>
        <Li><A ahref="#">Contact</A></Li>
      </Ul>
    </LogoNavHolder>
    <Button data-micron="bounce">Sign Up</Button>
    <Img src={main_illustration} id="illustration"></Img>
  </HeaderContainer>
)