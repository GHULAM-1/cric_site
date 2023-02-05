import React from "react";
import './LastSection.css';
import { Box } from "@mui/material";
import logo from '../assets/logo.png'
import {FooterInput} from './FooterInput';

const LastSection = () => {
  return <React.Fragment>
    <div className="LS__container">
        <div className="LS__1">

            <div className="LS__1__logo"> 
            </div>
            <p className="LS__1__number">+1 (156) - 777 - 888</p>
            <p className="LS__1__email">support@crichub.com</p>
        </div>
        <div className="LS__2">
            <p className="LS__2__heading">Quick Links</p>
            <p className="LS__2__t1">Updates</p>
            <p className="LS__2__t2">Information</p>
        </div>
        <div className="LS__3">
            <p className="LS__2__heading">About Us</p>
            <p className="LS__3__t1">Company</p>
            <p className="LS__3__t2">CricHub</p>
        </div>
        <div className="LS__4">
            <p className="LS__4__heading">Subscribe</p>
            <FooterInput></FooterInput>
            <p className="LS__2__t2"></p>
        </div>
    </div>
  </React.Fragment>;
};

export {LastSection};
