import React from "react";
import './FooterInput.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FooterInput = () => {
  return <React.Fragment>
 <div className="FI__container">
    <input type="text" className="FI__input" placeholder="Get in touch"/>
        <button className="FI__button">
        <ArrowForwardIcon></ArrowForwardIcon>
    </button>
    
 </div>
  </React.Fragment>;
};

export {FooterInput}
