import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import FirstScreen from './components/FirstScreen';
import SecondSection from './components/SecondSection';
import './styles/styles.scss';


const jsx = (
  <div>
    <Header />
    <FirstScreen />
    <SecondSection />
  </div>
)

ReactDOM.render(jsx, document.getElementById('app'));

module.hot.accept();