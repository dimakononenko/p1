import React from 'react'
import leaves from '../images/Leaves.png';

export default class FirstScreen extends React.Component {
  render () {
    return (
      <div className="FirstScreen">
        <img src={leaves} id="illustrationLeaves"/>
        <div className="fsInfo">
          <h1 className="textHeader">A New Way to Invest in Agriculture</h1>
          <p className="textParagraph">Zou provides farmes, ranchers, private foresters, and agricultural producers with online self service applications and educational materials.</p>
          <button href="#!" className="button" data-micron="bounce">Invest Now</button>
        </div>
      </div>
    )
  }
};