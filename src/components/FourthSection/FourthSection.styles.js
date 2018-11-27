import { device } from '../../theme/GlobalStyle';
import styled from 'styled-components';

export const FourthSectionContainer = styled.div`
  @media ${device.mobile} {
    border: solid 1px grey;
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
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
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

export const InvestorBox = styled.div`
  @media ${device.mobile} {
    width: 408px;
    height: 296px;
    border-radius: 5px;
    background: #FFFFFF;
    box-shadow: -1px 13px 20px 0 #F0F2F4;
    font-size: 18px;
    line-height: 32px;
    font-family: Chivo-Regular;
    color: #324148;
    H3:first-of-type {
      color: #66BB6A;
      line-height: 0em;
    }
    H3 {
      width: 200px;
    }
    P {
      width: 312px;
      margin-left: 48px;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`

export const Title = styled.div`
  @media ${device.mobile} {
    border: solid 1px grey;
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

export const WithAvaH3 = styled.div``

export const WithAva = styled.div`
  @media ${device.mobile} {
    display: flex;
    align-items: flex-start;
    margin: 47px 0px 0px 48px;
    Img {
      background: #FFFFFF;
      border-radius: 50%;
      box-shadow: 0 3px 20px 0 rgba(0,0,0,0.22);
      margin-right: 25px;
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`


export const Buttons = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    margin-top: 56px;
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