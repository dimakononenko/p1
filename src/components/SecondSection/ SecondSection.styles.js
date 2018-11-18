import { device } from '../../theme/GlobalStyle';
import styled from 'styled-components';

export const SeconSectionContainer = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-flow: column;
  }
  @media ${device.tablet} {
    justify-content: center;
  }
  @media ${device.laptop} {
    margin-top: 228px; 
  }
`
export const SecondSectionParagraph = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-flow: column;
    max-width: 552px;
    justify-content: center;
    margin: 0 auto;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`

export const H2 = styled.h2`
  @media ${device.mobile} {
    font-family: Chivo-Bold;
    font-size: 36px;
    color: #000000;
    text-align: center;
    line-height: 64px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`
export const P = styled.p`
  @media ${device.mobile} {
    font-family: Chivo-Regular;
    font-size: 18px;
    color: #324148;
    text-align: center;
    line-height: 32px;
    margin-left: 10px;
    margin-right: 10px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`
export const InfoBoxContainer = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin: 0 auto;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    flex-flow: row;
  }
`

export const InfoBox = styled.div`
  @media ${device.mobile} {
    background: #FFFFFF;
    box-shadow: -1px 13px 20px 0 #F0F2F4;
    margin: 98px 18px 0;
    max-width: 328px;
    min-height: 328px;
    border-radius: 5px;
  }
  @media ${device.tablet} {

  }
  @media ${device.laptop} {
  }
`
export const InfoBoxGreen = styled(InfoBox)`
  h3, p {
    color: #FFFFFF;
  }
  @media ${device.mobile} {
    background: #66BB6A;
    box-shadow: 0 25px 25px 0 rgba(118,196,125,0.31);
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`

export const Pbox = styled.p`
  @media ${device.mobile} {
    margin-left: 48px;
    margin-right: 32px;
    margin-bottom: 50px;
    font-family: Chivo-Light;
    font-size: 16px;
    color: #263238;
    line-height: 24px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`

export const H3 = styled.h3`
  @media ${device.mobile} {
    margin-left: 48px;
    margin-right: 32px;
    font-family: Chivo-Bold;
    font-size: 18px;
    color: #263238;
    text-align: left;
    line-height: 24px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`
export const Img = styled.img`
  @media ${device.mobile} {
    margin-left: 48px;
    margin-top: 49px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`
