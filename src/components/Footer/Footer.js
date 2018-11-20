import React from 'react'
import img from '../../images/logo.png';
import buttomBg from '../../images/buttom-background.svg';
import { 
    FooterContainer,
    FooterUls,
    FirstLevel,
    Ul,
    Li,
    P,
    Button,
    Line,
    FooterGreenBox,
    ThirdRow,
    Img
  } from './Footer.styles';

  export default () => (
    <FooterContainer>
      <FirstLevel>

        <FooterUls>

          <Ul>
            <Li>Company</Li>
            <Li>About Us</Li>
            <Li>Team</Li>
            <Li>Careers</Li>
            <Li>Contact</Li>
          </Ul>

          <Ul>
            <Li>Invest</Li>
            <Li>Features</Li>
            <Li>How It Works</Li>
            <Li>Pricing</Li>
            <Li>Login</Li>
          </Ul>

          <Ul>
            <Li>Legal</Li>
            <Li>Privacy</Li>
            <Li>Terms</Li>
            <Li>Security</Li>
          </Ul>

        </FooterUls>

        <FooterGreenBox>
          <P>Blog Zou</P>
          <P>Write email to us</P>
          <P>info@zoufarm.com</P>
          <Button data-micron="bounce">Sign Up</Button>
        </FooterGreenBox>

      </FirstLevel>
      <Line></Line>
      <ThirdRow>
        <Img src={img} id="logo"></Img>
        <P>© Copyright 2018. kkdimaa.</P>
      </ThirdRow>
    </FooterContainer>
  )