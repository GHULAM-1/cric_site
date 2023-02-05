import React from "react";
import arrow from '../assets/arrow.png'
import red from '../assets/red.png'
import './Card.css'

const Card = () => {
  return <React.Fragment>
    <div className="card">
        <div className="card-header">
            <img className="icon" src={red} alt="" />
            Live | PAK Vs IND 2023
            <img className="icon" src= {arrow} alt="" />
        </div>

        <div className="card-body">

        </div>
    </div>
  </React.Fragment>;
};

export  {Card};
