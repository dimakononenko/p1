import React from 'react';
import ArrowBack from '../../images/ArrowBack.png';
import ArrowForward from '../../images/ArrowForward.png';
import CombinedShape from '../../images/CombinedShape.png';
import Card from './Card';
import {
  Button,
  Buttons,
  FourthSectionContainer,
  H2,
  Img,
  InvestorReviews,
  LeftSide,
  RightSide,
  Title,
  WhiteGradient
} from './FourthSection.styles';
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



