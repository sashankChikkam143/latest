import { Typography,Box,Container,Divider,Chip, Button } from "@mui/material";
import image from "../assets/srisailam/srisailam1.svg";
import React from "react";
import Footer from "./footer/Footer";
import { teal ,pink} from "@mui/material/colors";
import IncludeDialogBox from "./includedialogbox";
import ExcludeDialogBox from "./excludedialogbox";
import { srisailamcabs } from "../data";
import MultiActionAreaCard from "./card";

const SrisailamPackage=()=>{

    return(
        <Container
      disableGutters
      maxWidth="lg"
      sx={{
        px: {
          xs: 2,
          sm: 5,
          md: 3.5,
        },
        my: 15,
      }}
    >
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
            SRISAILAM TOUR PACKAGE DETAILS
          </Typography>
        </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "center",
          gap: 4,
          alignItems: "center",
          mt:10,
        }}
      >
        <Box sx={{ flex: 1 ,backgroundColor:pink[900],p:2}}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "48px",
            //   color: "#161414",
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
            color="common.white"
          >
           SRISAILAM
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "32px",
            //   color: "#5B5B5B",
              my: 4,
            }}
            color="common.white"
          >
           The temple at Srisailam is the ancient and sacred place of South India. The presiding deity of the place is Brahmaramba Mallikarjuna Swamy in natural stone formations in the shape of Lingam and is listed as one of the twelve Jyotirlingams existing in the country.
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <img
            src={image}
            alt=""
            style={{
              borderRadius: "24px",
              maxWidth: "100%",
            }}
          />
        </Box>
      </Box>
      <Box sx={{
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
          mt:5}}>
        <Divider textAlign="left"></Divider>
        <Chip label="ONE DAY TRIP INCLUDES" />
        <list>
            <li>Octopus view point</li>
            <li>Dam view point</li>
            <li>Pathala ganga</li>
            <li>Paladara panchadara</li>
            <li>Sakshi Ganapathi</li>
            <li>Main Temple</li>
        </list>
        <Divider textAlign="left"></Divider>
        <Chip label="TWO DAYS TRIP INCLUDE" />
        <list>
          <li>Octopus view point</li>
          <li>Dam view point</li>
          <li>Pathala ganga</li>
          <li>Paladara panchadara</li>
          <li>Sakshi Ganapathi</li>
          <li>Main Temple</li>
          <li>Rope Way</li>
          <li>Jungle Safari</li>
          <li>Sikaharam </li>
          <li>Chatrapati Shivaji Fort</li>
          <li>Chenchu Lakshmi Temple</li>
        </list>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "center",
          gap: 4,
          alignItems: "center",
          mt:5
        }}
      >
        <Box sx={{ flex: 1 ,
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: "center",
        gap: 4,
        alignItems: "center"}}>
          <IncludeDialogBox/>
        </Box>
        <Box sx={{ flex: 1,display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "center",
          gap: 4,
          alignItems: "center" }}>
         <ExcludeDialogBox/>
        </Box>
      </Box>
      <Box sx={{mt:6, backgroundColor:teal[900], display: "flex",
                justifyContent: "center",
                gap: 4,
                alignItems: "center",}}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "48px",
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
            color="common.white"
          >
            CAR RENT DETAILS
          </Typography>
        </Box>
      <Box sx={{display: "flex",
              gap: 4,
              justifyContent: "space-evenly",
              alignItems: {
                xs: "center",
                md: "flex-start",
              },
              flexDirection: {
                xs: "column",
                md: "row",
              },mt:6}}>
        {srisailamcabs.map((car)=><MultiActionAreaCard {...car}/>)}
        </Box>

      <Box sx={{mt:5,display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              justifyContent: "center",
              gap: 4,
              alignItems: "center",}}>
         <Typography textAlign="center">
         To know About Srisailam Darshanam Timings
         <a href="https://www.srisailadevasthanam.org/en-in/sevas-and-darshanam/darshanam" target="_blank"><Button variant="contained">Click Here</Button></a>
        </Typography>
      </Box>
      <Box sx={{mt:5}}>
        <Footer/>
      </Box>
    </Container>
    );
}
export default SrisailamPackage;