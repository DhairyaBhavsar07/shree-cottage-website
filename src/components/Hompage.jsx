import React from "react";
import { useContext, useEffect } from "react";
import { Box, Divider, Stack, Typography, Card, Button, useMediaQuery } from "@mui/material";
import CSlider from './CSlider';
import Ecard from './Ecard';
import Review from './Review';
import Attractions from "./Attractions";
import Aboutus from "./Aboutus";
import '../styles/Homepage.css';
import { Helmet } from "react-helmet";
//import ReactGA from 'react-ga';

const asset3_1 = require('../images/Asset 3 1.png');

const Homepage = () => {
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("md"));


  const buttonProps = {
    variant: isSmallScreen ? "contained2" : "outlined",
  };

  return (
    <Stack> {/* Removed overflowX: hidden  and added individually as was causing issues with header*/}
      <Helmet>
        <title>Home - Shree Cottages</title>
        <meta
          name="description"
          content="Overview of Shree Cottages"
        />
        <meta 
          name="keywords"
          content="Shree Cottage, resort, hotel"
        />
      </Helmet>
      <Box className="hero" sx={{marginTop:{xs:"0px",md:"-100px"}}}>
        <svg width="100vw" viewBox="0 0 1920 447" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflowX:"hidden",position: "absolute", top: isSmallScreen ? "50vw" : "32vw" }}>
          <path d="M523.333 93.4543C322.275 112.504 268 15.6415 0 15.6415V447H1920V93.4543C1866 57.5005 1712.95 39.5266 1591.33 70.9831C1350 133.403 1267 68.5658 1070 16.5747C852.711 -40.7709 802.667 66.9883 523.333 93.4543Z" fill="#FFE2D8" />
        </svg>
        <Box className="hero-info" sx={{ overflowX: "hidden",mt:{xs:"-10vw",sm:"0px"}}}>
          <img src={require('../images/Asset 3 1.svg').default} alt="Hero Image" />
          <Box display="flex" flexDirection="column" sx={{ padding: { xs: "0 5vw 4vw 5vw", md: "0 10vw 4vw 10vw" }, backgroundColor: '#FFE2D8' }}>
            <Typography variant="h2" sx={{ fontSize: { xs: "1.4rem", md: "2.25rem" } }}>Shree Cottages</Typography>
            <Divider orientation="vertical" variant="middle" sx={{ height: { xs: "1rem", md: "1.55rem" }, width: "1px", backgroundColor: "#3D2521", alignSelf: "center", m: { xs: "0.5rem", md: "1.1rem" } }} />
            <Typography variant="h5" sx={{ fontSize: { xs: "0.9rem", md: "1.35rem" } }}>Shree Cottages is a destination wedding resort that offers a unique and memorable experience for your special day. Nestled in the heart of the Gir Jungle, the resort provides a stunning backdrop for your wedding photos and ceremony. With its luxurious accommodations and world-class amenities, Shree Cottages is the perfect place to celebrate your love.</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{overflowX: "hidden",width: "100vw", backgroundColor: "common.white", paddingTop: { xs: "45vw", sm: "20vw", md: "15vw", lg: "5vh", xl: "0vw" } }}>
        <Ecard />
        <CSlider />
        <Attractions />
        <Aboutus />
        <Review />
      </Box>
    </Stack>
  );
}

export default Homepage;
