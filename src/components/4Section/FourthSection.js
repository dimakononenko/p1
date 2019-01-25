import React, { Component } from 'react';
import { 
    FourthSectionContainer,
    H2,
    H3,
    P,
    Title,
    Img,
    WithAva,
    WithAvaH3,
    InvestorReviews,
    Buttons,
    Button,
    WhiteGradient,
    LeftSide,
    RightSide,
  } from './FourthSection.styles';
import CombinedShape from '../../images/CombinedShape.png'
import ArrowBack from '../../images/ArrowBack.png';
import ArrowForward from '../../images/ArrowForward.png';
import Card from './Card';
// import data from '../../data/data';

export default class FourthSection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  nextInvestor = () => {
  }

  prevInvestor = () => {
    // const newIndex = this.state.investor.index-1;
    // this.setState({
    //   investor: data.investors[newIndex]
    // })
  }

  render() {
    // const {investor} = this.state;
    return (

      <FourthSectionContainer>
        <Title>
          <Img src={CombinedShape}/>
          <H2>What investors like you are saying about Zou</H2>
        </Title>
        <InvestorReviews>
          <Card/>
        </InvestorReviews>
        <WhiteGradient>
          <LeftSide></LeftSide>
          <RightSide></RightSide>
        </WhiteGradient>
        <Buttons>
          <Button
            data-micron="fade"
            // onClick={() => this.nextInvestor()}
            // disabled={investor.index === data.investors.length-1}
            >
            <Img src={ArrowBack}/>
          </Button>
          <Button
            data-micron="fade"
            // onClick={() => this.prevInvestor()}
            // disabled={investor.index === 0}
            >
            <Img id="last-button" src={ArrowForward}/>
          </Button>
        </Buttons>
      </FourthSectionContainer>
    )
  }
};



