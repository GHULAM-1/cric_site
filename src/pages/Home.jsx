import React from "react";

import {Nav} from '../components/Nav'
import { Box } from "@mui/material";
import './Home.css'
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import {LastSection} from '../components/LastSection'
import ScrollContainer from 'react-indiana-drag-scroll'
import { useFetchLiveScore } from "../hooks/useFetchLiveScores";
import { CleaningServices } from '@mui/icons-material';


const Home = () => {
  const {data:cardData,isLoading,isError,isSuccess,error} = useFetchLiveScore();
  
  return <React.Fragment>

    {console.log(cardData?.data[0].team1)
    }
  <div className="Home__container">
    <Nav></Nav>
      <Header></Header>
      {/* <div className="card-wrapper"> */}
      <ScrollContainer className="scroll-container">
        {cardData?.data.map((i)=> {
          {console.log(i)}
      return  <Card cardData = {i} key = {i.id}></Card>
          
        })}
    
      </ScrollContainer>
      {/* </div> */}
      <LastSection></LastSection>
      <Footer></Footer>
  </div>
  </React.Fragment>
}

export {Home};
