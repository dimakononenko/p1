import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import FirstScreen from './components/FirstScreen';
import SecondSection from './components/SecondSection';
import './styles/styles.scss';
import styled from 'styled-components';

export const Site = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`


const jsx = (
  <Site>
    <Header />
    <FirstScreen />
    <SecondSection />
  </Site>
)

// class Site extends Comment {
//   render () {
//     return (
//       <div>
//         <Header />
//         <FirstScreen />
//         <SecondSection />
//       </div>
//     )
//   }
// }

ReactDOM.render(jsx, document.getElementById('app'));

module.hot.accept();