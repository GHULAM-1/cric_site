import React from "react";
import arrow from '../assets/arrow.png'
import red from '../assets/red.png'
import './Card.css'
import pak from '../assets/pakistan.png'
import ind from '../assets/india.png'

const Card = () => {
  return <React.Fragment>
    <div className="card">
        <div className="card-header">
            <img className="icon red" src={red} alt="" />
            <span className="header-info">Live | PAK Vs IND 2023</span>
            <img className="icon arrow" src= {arrow} alt="" />
        </div>

        <div className="card-body">
          <span className="match-type">1st Test</span>

          <div className="match">
            <div className="team">
            <img className="team-icon" src={pak} alt="" />
            <span className="team-score">PAK   112/0*   51.0</span>
            </div>

            <div className="team">
            <img className="team-icon" src={ind} alt="" />
            <span className="team-score">IND   112/0*   51.0</span>
          </div>

          </div>
        </div>
    </div>
  </React.Fragment>;
};

export  {Card};
