import React from 'react'
import { 
    ThirdSectionContainer,
    TextContainer,
    PhotosContainer,
    HowItWorksBanner,
    PhotoItem,
    H2,
    P,
    Img,
    Line,
    Button,
    Text,
    ColorOverlay,
    Points,
    CircleNumber,
    Width1056,
    LastParagraph
  } from './ThirdSection.styles';
import photobox1 from '../../images/photobox1.png';
import photobox2 from '../../images/photobox2.png';

export default () => (
  <ThirdSectionContainer>
    <Width1056>
      <TextContainer>
        <H2>Invest on your convenience</H2>
        <P>Autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</P>
      </TextContainer>

      <PhotosContainer>
        <PhotoItem>
          <Img src={photobox1}/>
          <ColorOverlay></ColorOverlay>
          <Text>
            <P>NEW FARM TODAY</P>
            <Line></Line>
            <H2>Short terms investment</H2>
            <P>Invest in farms that will be ready for harvest in 3-18 months</P>
            <Button data-micron="bounce">Browse Farm</Button>
          </Text>
        </PhotoItem>
        <PhotoItem>
          <Img src={photobox2}/>
          <ColorOverlay></ColorOverlay>
          <Text>
            <P>FULLY FUNDED</P>
            <Line></Line>
            <H2>Long terms investment</H2>
            <P>Consider farms that have long term investment program.</P>
            <Button data-micron="bounce">Learn more</Button>
          </Text>
        </PhotoItem>
      </PhotosContainer>
    </Width1056>

    <HowItWorksBanner>
      <H2>How it works</H2>

      <P>Take your pick from the supply chain and participate in agribusiness projects that are backed up not only by Zou, but also by the best land, family heritage, innovation and overall superior expertise.</P>
      
      <Points>
        <CircleNumber>
          <P id="GreenLetter">01</P>
        </CircleNumber>
        <Line id='line'></Line>
        <CircleNumber>
          <P>02</P>
        </CircleNumber>
        <Line id='line'></Line>
        <CircleNumber>
          <P>03</P>
        </CircleNumber>
        <Line id='line'></Line>
        <CircleNumber>
          <P>04</P>
        </CircleNumber>
      </Points>

      <LastParagraph>
        <H2>Select your farmshare and complete reservation form.</H2>
        <P>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere</P>
      </LastParagraph>

    </HowItWorksBanner>

  </ThirdSectionContainer>
)