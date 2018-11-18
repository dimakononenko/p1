import { device } from '../../theme/GlobalStyle';
import styled from 'styled-components';


// Styled-Components

export const HeaderContainer = styled.div`
  @media ${device.mobile} {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-family: Chivo;
    font-size: 1.2em;
    color: #000000;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    font-size: 1em;
  }
`
export const LogoNavHolder = styled.div`
  display: flex;
  align-items: flex-start;
  @media ${device.laptop} {
    justify-content: flex-start;
  }
`
export const Logo = styled.img`
  src: url(${props => props.src});
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.tablet} {
    margin-top: 45px;
    margin-left: 40px;
  }
  @media ${device.laptop} {
    display: flex;
    right: 0;
    margin-left: 120px;
    /* margin-right: 113px; */
  }
`

export const Ul = styled.ul`
  @media ${device.mobile} {
    flex-direction: column;
    margin-top: 37px;
    position: relative;
    left: 8px;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    margin-top: 57px;
    position: relative;
    right: 100px;
  }
`

export const Li = styled.li`
  @media ${device.mobile} {
    list-style: none;
    margin-bottom: 15px;
    margin-right: 32px
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`
export const A = styled.a`
  @media ${device.mobile} {
    position: relative;
    text-decoration: none;
    padding-bottom: 8px;
    &:before,
    &:after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: rgb(72, 189, 76);
    }
    &:before {
      opacity: 0;
      transform: translateY(- 8px);
      transition: transform 0s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s;
    }
    &:after {
      opacity: 0;
      transform: translateY(8px/2);
      transition: transform .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity .2s;
    }
    &:hover,
    &:focus {
      &:before,
      &:after {
        opacity: 1;
        transform: translateY(0);
      }
      &:before {
        transition: transform .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity .2s;
      }
      &:after {
        transition: transform 0s .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s .2s;
      }
    }
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
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
    position: relative;
    margin: 20px 10% 10px 0;
    margin-top: 25px;
  }
  @media ${device.tablet} {
    /* order: 2; */
    height: 48px;
    width: 128px;
  }
  @media ${device.laptop} {
    margin-top: 45px;
  }
`

export const Img = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  max-width: 660px;
  @media ${device.mobile} {
    width: 60%;
    max-width: 660px;
  }
  @media ${device.mobileL} {
    width: 60%;
  }
  @media ${device.tablet} {
    width: 40%;
  }
  @media ${device.laptop} {
    width: 50%;
    /* max-width: 600px; */
  }
`