import React from "react";
import { srisailamimages,tirumalaimages,shirdiimages,badrachalamimages,vijayawadaimages,yadagiriimages } from "../data";
import { Box,Container,Typography,Button } from "@mui/material";
import ImageSlider from "./imageSlider";
import Footer from "./footer/Footer";
const Tours=()=>{
    return(
        <Container>
        <Box sx={{mt:10}}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "48px",
              color: "#161414",
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            SRISAILAM TOUR PACKAGE(2 or 3Days)
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "32px",
              color: "#5B5B5B",
              my: 4,
            }}
          >
            content
          </Typography>
          <Button variant="contained">More Details</Button>
        </Box>
        <Box sx={{mt:4}}>
         <ImageSlider place="SRISAILAM" Images={srisailamimages}/>
        </Box>
        <Box sx={{mt:6}}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "48px",
              color: "#161414",
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            TIRUMALA TOUR PACKAGE(2 or 3Days)
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "32px",
              color: "#5B5B5B",
              my: 4,
            }}
          >
            content
          </Typography>
          <Button variant="contained">More Details</Button>
        </Box>
        <Box sx={{mt:4}}>
         <ImageSlider place="SRISAILAM" Images={tirumalaimages}/>
        </Box>
        <Box sx={{mt:6}}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "48px",
              color: "#161414",
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            VIJAYAWADA TOUR PACKAGE(2 or 3Days)
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "32px",
              color: "#5B5B5B",
              my: 4,
            }}
          >
            content
          </Typography>
          <Button variant="contained">More Details</Button>
        </Box>
        <Box sx={{mt:4}}>
         <ImageSlider place="SRISAILAM" Images={vijayawadaimages}/>
        </Box>
        <Box sx={{mt:6}}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "48px",
              color: "#161414",
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
        YADAGIRIGUTTA TOUR PACKAGE(2 or 3Days)
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "32px",
              color: "#5B5B5B",
              my: 4,
            }}
          >
            content
          </Typography>
          <Button variant="contained">More Details</Button>
        </Box>
        <Box sx={{mt:4}}>
         <ImageSlider place="SRISAILAM" Images={yadagiriimages}/>
        </Box>
        <Box sx={{mt:6}}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "48px",
              color: "#161414",
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            BADRACHALAM TOUR PACKAGE(2 or 3Days)
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "32px",
              color: "#5B5B5B",
              my: 4,
            }}
          >
            content
          </Typography>
          <Button variant="contained">More Details</Button>
        </Box>
        <Box sx={{mt:4}}>
         <ImageSlider place="SRISAILAM" Images={badrachalamimages}/>
        </Box>
        <Box sx={{mt:6}}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "48px",
              color: "#161414",
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            SHIRDI TOUR PACKAGE(2 or 3Days)
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "32px",
              color: "#5B5B5B",
              my: 4,
            }}
          >
            content
          </Typography>
          <Button variant="contained">More Details</Button>
        </Box>
        <Box sx={{mt:4}}>
         <ImageSlider place="SRISAILAM" Images={shirdiimages}/>
        </Box>
        <Box sx={{mt:6}}>
            <Footer/>
        </Box>
        </Container>
    );
        }

export default Tours;