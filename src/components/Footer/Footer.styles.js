import { device } from '../../theme/GlobalStyle';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  @media ${device.mobile} {
    display: flex;
    max-width: 1056px;
    margin: 0 auto;
    margin-top: 128px;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`
export const FirstLevel = styled.div`
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const FooterUls = styled.div`
  @media ${device.mobile} {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0px 20px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    width: 590px;
    padding: 0px;
  }
`

export const Ul = styled.ul`
  @media ${device.mobile} {
    Li:first-of-type {
      font-weight: bold;
      text-transform: uppercase;
      color: #000000;
    }
    padding: 0;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
  `

export const Li = styled.li`
  @media ${device.mobile} {
    list-style: none;
    font-size: 16px;
    color: #607D8B;
    text-align: left;
    line-height: 40px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`

export const FooterGreenBox = styled.div`
  @media ${device.mobile} {
    P:first-of-type {
      font-weight: bold;
      font-size: 18px;
      padding-top: 32px;
    }
    P:last-of-type {
      font-weight: bold;
      font-size: 18px;
    }
    background: #66BB6A;
    width: 280px;
    height: 258px;
    border-radius: 5px;
    margin: 0 auto;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    margin: 0;
  }
`

export const P = styled.p`
  @media ${device.mobile} {
    color: #ffffff;
    margin-left: 56px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`

export const Line = styled.div`
  @media ${device.mobile} {
    width: 100%;
    height: 2px;
    background-color: #EEEEEE;
    margin: 0 auto;
    margin-top: 118px
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`
export const Button = styled.button`
  @media ${device.mobile} {
    border: 1px solid #FFFFFF;
    font-family: Chivo-Regular;
    min-height: 40px;
    min-width: 110px;
    text-align: center;
    font-size: 16px;
    color: #F1F8E9;
    border-radius: 5px;
    background: none;
    margin-left: 56px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`
export const ThirdRow = styled.div`
  @media ${device.mobile} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 69px;
    margin-bottom: 85px;
    P {
      font-family: Chivo-Regular;
      font-size: 14px;
      color: #607D8B;
    }
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

// export const FooterContainer = styled.div`
//   @media ${device.mobile} {
//   }
//   @media ${device.tablet} {
//   }
//   @media ${device.laptop} {
//   }
// `