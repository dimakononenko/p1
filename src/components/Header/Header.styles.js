import { device } from '../../theme/GlobalStyle';
import styled from 'styled-components';


// Styled-Components

export const HeaderContainer = styled.div`
  /* border: #000000 solid; */
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  ul {
    display: flex;
  }
  li {
    list-style: none;
    margin: 8px 25px 25px;
  }
  @media ${device.mobile} {
    #logo {
      display: none;
    }
    ul {
      flex-direction: column;
      margin-top: 25px;
    }
    li {
      list-style: none;
      margin: 0px 10% 15px;
    }
  }

  @media ${device.tablet} {
    border: #000000 solid;
    font-family: Chivo;
    font-size: 1em;
    color: #000000;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 45px;
    #logo {
      display: flex;
    }
    ul {
      flex-direction: column;
    }
  }
`
export const Logo = styled.img`
    src: url(${props => props.src});
    margin-left: 13%;

`
export const Button = styled.button`
  border: 1px solid #FFFFFF;
  font-family: Chivo-Regular;
  height: 48px;
  width: 128px;
  text-align: center;
  font-size: 16px;
  color: #F1F8E9;
  border-radius: 5px;
  background: none;
  position: relative;
  margin: 20px 10% 10px;
  @media ${device.mobile} {
    height: 40px;
    width: 100px;
  }
`
export const Img = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  max-width: 660px;
  width: 60%;
  @media ${device.mobileS} {
    position: absolute
  }
`
