import React from 'react'
import leaves from '../../images/Leaves.png';
import { FirstScreenContainer, Img, InfoBlock, H1, P, Button } from './FirstSection.styles'

export default () => (
  <FirstScreenContainer>
    <Img src={leaves} id="illustrationLeaves"/>
    <InfoBlock>
      <H1>A New Way to Invest in Agriculture</H1>
      <P>Zou provides farmes, ranchers, private foresters, and agricultural producers with online self service applications and educational materials.</P>
      <Button href="#!" data-micron="bounce">Invest Now</Button>
    </InfoBlock>
  </FirstScreenContainer>
)