import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import FirstScreen from './components/FirstScreen';
import SecondSection from './components/SecondSection';
import './styles/styles.scss';
import styled, { createGlobalStyle } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';


export const Site = styled.div``


class App extends Component {
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

ReactDOM.render(<App/>, document.getElementById('app'));

module.hot.accept();