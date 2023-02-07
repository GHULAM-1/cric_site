import React from "react";

import {Nav} from '../components/Nav'
import { Box } from "@mui/material";
import './Home.css'
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import {LastSection} from '../components/LastSection'
import ScrollContainer from 'react-indiana-drag-scroll'

const Home = () => {
  return <React.Fragment>
  <div className="Home__container">
    <Nav></Nav>
      <Header></Header>
      {/* <div className="card-wrapper"> */}
      <ScrollContainer className="scroll-container">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>      
      </ScrollContainer>
      {/* </div> */}
      <LastSection></LastSection>
      <Footer></Footer>
  </div>
  </React.Fragment>
}

export {Home};
