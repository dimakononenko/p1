import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './styles/styles.scss';

const jsx = (
  <div>
    <Header />
  </div>
)

ReactDOM.render(jsx, document.getElementById('app'));

module.hot.accept();