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
import data from '../../data/data';
import ArrowBack from '../../images/ArrowBack.png';
import ArrowForward from '../../images/ArrowForward.png';
import InvestorBox from './InvestorBox/InvestorBox';

export default class FourthSection extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const {properties, property} = this.state;
    return (
      <FourthSectionContainer>
        <Title>
          <Img src={CombinedShape}/>
          <H2>What investors like you are saying about Zou</H2>
        </Title>
        <InvestorReviews>
          <InvestorBox />
          <InvestorBox />
          <InvestorBox />
          <InvestorBox />
          <InvestorBox />
        </InvestorReviews>
        <WhiteGradient>
          <LeftSide></LeftSide>
          <RightSide></RightSide>
        </WhiteGradient>
        <Buttons>

          <Button
            data-micron="fade"
            // onClick={() => this.prevProperty()}
            // disabled={property.index === DataCue.properties.length-1}
            >
            <Img src={ArrowBack}/>
          </Button>

          <Button
            data-micron="fade"
            // nClick={() => this.prevProperty()}
            // disabled={property.index === DataCue.properties.length+1}
            >
            <Img id="last-button" src={ArrowForward}/>
          </Button>
          
        </Buttons>
      </FourthSectionContainer>
    )
  }
};