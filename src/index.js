import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import FirstSection from './components/1Section/FirstSection';
import SecondSection from './components/2Section/SecondSection';
import Footer from './components/Footer/Footer';
import ThirdSection from './components/3Section/ThirdSection';
import FourthSection from './components/4Section/FourthSection';
import styled from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';


export const Site = styled.div``

class Layout extends Component {
  render () {
    return (
      <React.Fragment>
        <Site>
          <GlobalStyle />
          <Header />
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <Footer />
        </Site>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Layout/>, document.getElementById('app'));

module.hot.accept();