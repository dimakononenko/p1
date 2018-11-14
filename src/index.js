import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import FirstScreen from './components/firstScreen/FirstScreen';
import SecondSection from './components/SecondSection/SecondSection';
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
          <FirstScreen />
          <SecondSection />
        </Site>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Layout/>, document.getElementById('app'));

module.hot.accept();