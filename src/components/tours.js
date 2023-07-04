import React from "react";
import { useNavigate } from "react-router-dom";
import { srisailamimages,tirumalaimages,shirdiimages,badrachalamimages,vijayawadaimages,yadagiriimages } from "../data";
import { Box,Container,Typography,Button } from "@mui/material";
import { ArrowRight} from "@mui/icons-material";
import ImageSlider from "./imageSlider";
import Footer from "./footer/Footer";
import { teal } from "@mui/material/colors";
const Tours=()=>{
    const navigate=useNavigate();
    return(
        <Container sx={{
            px: {
              xs: 2,
              sm: 5,
              md: 10,
            },
            my: 15,}}>
              <Box sx={{mt:10, backgroundColor:teal[900], display: "flex",
  flexDirection: {
    xs: "column",
    md: "row",
  },
  justifyContent: "center",
  gap: 4,
  alignItems: "center",}}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "48px",
              // color: "#161414",
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
            color="common.white"
          >
            AVAILABLE TOUR PACKAGES
          </Typography>
        </Box>
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
            SRISAILAM TOUR PACKAGE (1 or 2Days)
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
            Now you can avail 1 or 2-Day srisailam Car Packages from Hyderabad  at economical costs and travel at your convenience. Starting from small-size cars to luxury Etios, choose your ideal vehicle and save money!
          </Typography>
          <Button variant="contained" endIcon={<ArrowRight/>} onClick={()=>{
            navigate("/srisailampackage")
          }}>More Details</Button>
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
            TIRUMALA TOUR PACKAGE
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
            Now you can avail 1 or 2-Day Tirupati Car Packages from Hyderabad  at economical costs and travel at your convenience. Starting from small-size cars to luxury Etios, choose your ideal vehicle and save money!
          </Typography>
          <Button variant="contained" endIcon={<ArrowRight/>} onClick={()=>{
            navigate("/tirupatipackage")
          }}>More Details</Button>
        </Box>
        <Box sx={{mt:4}}>
         <ImageSlider place="TIRUMALA" Images={tirumalaimages}/>
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
            VIJAYAWADA TOUR PACKAGE
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
           Now you can avail 1 or 2-Day Vijayawada Car Packages from Hyderabad  at economical costs and travel at your convenience. Starting from small-size cars to luxury Etios, choose your ideal vehicle and save money!
          </Typography>
          <Button variant="contained" endIcon={<ArrowRight/>} onClick={()=>{
            navigate("/vijayawadapackage")
          }}>More Details</Button>
        </Box>
        <Box sx={{mt:4}}>
         <ImageSlider place="VIJAYAWADA" Images={vijayawadaimages}/>
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
        YADAGIRIGUTTA TOUR PACKAGE
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
            Now you can avail 1 or 2-Day YADAGIRIGUTTA Car Packages from Hyderabad  at economical costs and travel at your convenience. Starting from small-size cars to luxury Etios, choose your ideal vehicle and save money!
          </Typography>
          <Button variant="contained" endIcon={<ArrowRight/>} onClick={()=>{
            navigate("/yadagiriguttapackage")
          }}>More Details</Button>
        </Box>
        <Box sx={{mt:4}}>
         <ImageSlider place="YADAGIRIGUTTA" Images={yadagiriimages}/>
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
            BADRACHALAM TOUR PACKAGE
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
            Now you can avail 1 or 2-Day BADRACHALAM Car Packages from Hyderabad  at economical costs and travel at your convenience. Starting from small-size cars to luxury Etios, choose your ideal vehicle and save money!
          </Typography>
          <Button variant="contained" endIcon={<ArrowRight/>} onClick={()=>{
            navigate("/badrachalampackage")
          }}>More Details</Button>
        </Box>
        <Box sx={{mt:4}}>
         <ImageSlider place="BADRACHALAM" Images={badrachalamimages}/>
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
            SHIRDI TOUR PACKAGE
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
            Now you can avail 1 or 2-Day SHIRDI Car Packages from Hyderabad  at economical costs and travel at your convenience. Starting from small-size cars to luxury Etios, choose your ideal vehicle and save money!
          </Typography>
          <Button variant="contained" onClick={()=>{
            navigate("/shirdipackage")
          }}>More Details</Button>
        </Box>
        <Box sx={{mt:4}}>
         <ImageSlider place="SHIRDI" Images={shirdiimages}/>
        </Box>
        <Box sx={{mt:6}}>
            <Footer/>
        </Box>
        </Container>
    );
        }

export default Tours;
