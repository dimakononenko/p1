import React from 'react'
import { 
    FourthSectionContainer,
    H2,
    H3,
    P,
    Title,
    Img,
    InvestorBox,
    WithAva,
    WithAvaH3,
    InvestorReviews,
    Buttons,
    Button,
  } from './FourthSection.styles';
  import CombinedShape from '../../images/CombinedShape.png'
  import ava1 from '../../images/ava1.png';
  import ArrowBack from '../../images/ArrowBack.png'
  import ArrowForward from '../../images/ArrowForward.png'
  
  export default () => (
    <FourthSectionContainer>
      <Title>
        <Img src={CombinedShape}/>
        <H2>What investors like you are saying about Zou</H2>
      </Title>
      <InvestorReviews>
        <InvestorBox>
          <WithAva>
            <Img src={ava1}/>
            <WithAvaH3>
              <H3>Fernando Soler</H3>
              <H3>Telecomunication Engineer</H3>
            </WithAvaH3>
          </WithAva>
          <P>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae</P>
        </InvestorBox>
      </InvestorReviews>
      <Buttons>
        <Button><Img src={ArrowBack}/></Button>
        <Button><Img id="last-button" src={ArrowForward}/></Button>
      </Buttons>
    </FourthSectionContainer>
  );