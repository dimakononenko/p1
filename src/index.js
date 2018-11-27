import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';
import Footer from './components/Footer/Footer';
import ThirdSection from './components/ThirdSection/ThirdSection';
import FourthSection from './components/FourthSection/FourthSection';
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