import React from "react";

import {Nav} from '../components/Nav'
import { Box } from "@mui/material";
import './Home.css'
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Wrapper } from "../components/Wrapper";

const Home = () => {
  return <React.Fragment>
  <Wrapper className="home">
    <Nav></Nav>
      <Header></Header>
      <Card></Card>
  </Wrapper>
  </React.Fragment>
}

export {Home};
