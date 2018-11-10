import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import FirstScreen from './components/FirstScreen';
import './styles/styles.scss';


const jsx = (
  <div>
    <Header />
    <FirstScreen />
  </div>
)

ReactDOM.render(jsx, document.getElementById('app'));

module.hot.accept();