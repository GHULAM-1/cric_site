import React from "react";
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
  return <React.Fragment>
    <div className="Footer__container">
      <div className="Footer__left">
        <LinkedInIcon  sx = {{
          "fontSize":20
        }}></LinkedInIcon>
        <FacebookIcon sx = {{
          "fontSize":20
        }}></FacebookIcon>
        <TwitterIcon sx = {{
          "fontSize":20
        }}></TwitterIcon>
      </div>
      <div className="Footer__right">
          <CopyrightIcon className = "Footer__right__icon" sx = {{
          "fontSize":20
        }} ></CopyrightIcon>
          <p className="Footer__right__contents">
            Crichub. All rights reserved
          </p>
      </div>
    </div>
  </React.Fragment>;
};

export {Footer};
