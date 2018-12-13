import { device } from '../../theme/GlobalStyle';
import styled from 'styled-components';

export const FourthSectionContainer = styled.div`
  @media ${device.mobile} {
    /* border: solid 1px grey; */
    margin-top: 100px;
    display: flex;
    flex-direction: column;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`

export const H2 = styled.h2`
  @media ${device.mobile} {
    margin: 0;
    font-family: Chivo-Bold;
    font-size: 36px;
    color: #000000;
    line-height: 45px;
    width: 411px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`

export const Img = styled.img`
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`

export const InvestorReviews = styled.div`
  @media ${device.mobile} {
    margin-top: 121px;
    display: flex;
    align-items: flex-start;
    overflow: hidden;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    width: 100%;
    justify-items: center;
  }
`
export const H3 = styled.h3`
  @media ${device.mobile} {
    font-family: Chivo-Bold;
    font-size: 18px;
    color: #263238;
    line-height: 24px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`
export const P = styled.p`
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`


export const Title = styled.div`
  @media ${device.mobile} {
    margin: 0 auto;
    Img {
      position: absolute;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    width: 1024px;
  }
`


export const Buttons = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    position: relative;
    bottom: 250px;
    button:last-of-type {
      :active{
      background: #F7FAF7;
      }
    }
    button:first-of-type {
    background: #66BB6A;
    box-shadow: 0 25px 25px 0 rgba(118,196,125,0.31);
      :active {
        background: #37A03C;
      }
    }
    Img:first-of-type {
      position: relative;
      right: 4px;
    }
    #last-button {
      position: relative;
      left: 2px;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    width: 1024px;
  }
`

export const Button = styled.button`
  @media ${device.mobile} {
    background: #FFFFFF;
    box-shadow: -1px 13px 20px 0 #F0F2F4;
    border: 0px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 16px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`

export const WhiteGradient = styled.div`
  @media ${device.mobile} {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    bottom: 300px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`

export const LeftSide = styled.div`
  @media ${device.mobile} {
    background-image: linear-gradient(270deg, rgba(255,255,255,0.00) 17%, #FFFFFF 62%);
    width: 408px;
    height: 296px;
    position: relative;
    right: 150px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`
export const RightSide = styled.div`
  @media ${device.mobile} {
    background-image: linear-gradient(90deg, rgba(255,255,255,0.00) 17%, #FFFFFF 62%);
    width: 408px;
    height: 296px;
    position: relative;
    left: 150px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`