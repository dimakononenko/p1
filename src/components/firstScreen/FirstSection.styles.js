import { device } from '../../theme/GlobalStyle';
import styled from 'styled-components';

export const FirstScreenContainer = styled.div`
  @media ${device.mobile} {
    display: flex;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`
export const Img = styled.img`
  @media ${device.mobile} {
    position: absolute;
    width: 20%;
    max-width: 160px;
    z-index: -1;
    margin-top: 500px;
  }
  @media ${device.tablet} {
    max-height: 580px;
    height: 50%;
    max-width: 160px;
    width: 50%;
  }
  @media ${device.laptop} {
    margin-top: 450px;
  }
`
export const InfoBlock = styled.div`
  @media ${device.mobile} {
    /* width: 365px; */
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 70px;
  }
  @media ${device.mobileL} {
    width: 365px;
  }
  @media ${device.tablet} {
    width: 473px;
    margin-top: 0px;
    margin-left: 50px;
  }
  @media ${device.laptop} {
    margin-left: 120px; 
    margin-top: 70px;
  }
`
export const H1 = styled.h1`
  @media ${device.mobile} {
    font-family: Chivo-Bold;
    font-size: 37px;
    color: #000000;
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
    color: #263238;
    text-align: left;
    line-height: 32px;
    margin-top: 25px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`
export const Button = styled.button`
  @media ${device.mobile} {
    box-shadow: 0 13px 20px 0 rgba(118, 196, 125, 0.41);
    background: #66BB6A;
    font-family: Chivo-Regular;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
    line-height: 32px;
    width: 144px;
    height: 48px;
    border-radius: 5px;
    border-style: none;
    margin-top: 54px;
    margin-right: 8px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    float: left;
  }
`