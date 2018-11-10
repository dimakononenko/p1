import React from 'react'

export default class FirstScreen extends React.Component {
  render () {
    return (
      <div className="FirstScreen">
        <div className="fsInfo">
          <h1>A New Way to Invest in Agriculture</h1>
          <p>Zou provides farmes, ranchers, private foresters, and agricultural producers with online self service applications and educational materials.</p>
          <button href="#!" className="button" data-micron="bounce">Invest Now</button>
        </div>
      </div>
    )
  }
};