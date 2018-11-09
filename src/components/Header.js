import React, { Component } from 'react';

export default class Header extends React.Component {
  render () {
    return (
      <header className="container">
        <div className="logo"></div>
          <nav>
            <ul>
              <li><a ahref="#">Home</a></li>
              <li><a ahref="#">Product</a></li>
              <li><a ahref="#">Team</a></li>
              <li><a ahref="#">Blog</a></li>
              <li><a ahref="#">Contact</a></li>
            </ul>
          </nav>
      </header>
    )
  }  
};

// export default class Content extends React.Component {
//   render () {
//     return (
//       <div className="1screen">
//         <h1>A New Way to Invest in Agriculture</h1>
//         <p>Zou provides farmes, ranchers, private foresters, and agricultural producers with online self service applications and educational materials.</p>
//         <button>Invest Now</button>
//       </div>
//     )
//   }
// };