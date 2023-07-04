import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography,Button } from "@mui/material";
import aboutUsImg from "../../assets/main/about-us-img.svg";
import { East } from '@mui/icons-material' 

const AboutUs = () => {

  const navigate=useNavigate();
  return (
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
        }}
      >
        <Box sx={{ flex: 1 }}>
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
            About Us
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
           We are GRRTOURS&TRAVELS provide Rental cars,Tour packages to Srisailam(Mallikarjuna Swamy),
           Tirumala(Lord balaji), VIJAYAWADA(Kanakadurgamma), YADAGIRIGUTTA (Narasimhaswamy), BADRACHALAM (Sri rama),
           SHIRDI (Sai baba) with affroadable prices.
          </Typography>
          <Button endIcon={<East />} variant="contained" onClick={()=>{
            navigate("/about");
          }}>More</Button>
        </Box>
        <Box sx={{ flex: 1 }}>
          <img
            src={aboutUsImg}
            alt=""
            style={{
              borderRadius: "24px",
              maxWidth: "100%",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default AboutUs;
