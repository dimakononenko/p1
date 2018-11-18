import React from 'react'
import { 
    SeconSectionContainer,
    SecondSectionParagraph,
    H2,
    P,
    InfoBox,
    H3,
    Pbox,
    Img,
    InfoBoxContainer,
    InfoBoxGreen
  } from './ SecondSection.styles';
  import InfoBox1 from '../../images/InfoBox1.png';
  import InfoBox2 from '../../images/InfoBox2.png';
  import InfoBox3 from '../../images/InfoBox3.png';
  

export default class SecondSection extends React.Component {
  render() {
    return (
      <SeconSectionContainer>

        <SecondSectionParagraph>
          <H2>New Opportunities</H2>
          <P>We are the first and the only crowdfunding platform enabling you to help finance our farmers.</P>
        </SecondSectionParagraph>

        <InfoBoxContainer>

          <InfoBox>
            <Img src={InfoBox1} />
            <H3>Connect with our farmers</H3>
            <Pbox>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</Pbox>
          </InfoBox>

          <InfoBoxGreen>
            <Img src={InfoBox2} />
            <H3>Connect with our farmers</H3>
            <Pbox>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</Pbox>
          </InfoBoxGreen>

          <InfoBox>
            <Img src={InfoBox3} />
            <H3>Connect with our farmers</H3>
            <Pbox>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</Pbox>
          </InfoBox>
          
        </InfoBoxContainer>

      </SeconSectionContainer>
    )
  }
};


// <section className="bulletPointBox">
//  <h3>Connect with our farmers</h3>
//  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</p>
// </section>