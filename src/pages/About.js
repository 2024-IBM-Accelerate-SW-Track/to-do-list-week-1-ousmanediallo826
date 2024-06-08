import React, { Component } from 'react';
import "./About.css";
import ousmanediallo from "../assets/ousmanediallo.jpeg";
  
export default class About extends Component {
  render() {
    return (
      <div>
      <div className="split left">
        <div className="centered">
          <img
            className="profile_image"
            src={ousmanediallo}
            alt="Profile Pic"
          />
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Ousmane Diallo</div>
          <div className="brief_description">
            As a computer systems major at CUNY NYC College of Technology, I'm passionate about technology and its potential. A lifelong learner and hard worker, I'm also dedicated to giving back to my community. That's why I serve as the Vice President of Finance for the student government at NYC, working to make a positive impact.
          </div>
        </div>
      </div>
    </div>
    )
  }
}
