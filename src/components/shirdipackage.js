import { Typography,Box,Container,Button } from "@mui/material";
import image from "../assets/shirdi/srisailam1.svg";
import React from "react";
import Footer from "./footer/Footer";

const ShirdiPackage=()=>{

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
            Name of the package
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
          justifyContent: "center",
          alignItems: "center",
          mt:5}}>
        Details of the package
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
          incluions
        </Box>
        <Box sx={{ flex: 1,display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "center",
          gap: 4,
          alignItems: "center" }}>
          Exclusions
        </Box>
      </Box>
      <Box sx={{mt:5}}>
        <Footer/>
      </Box>
    </Container>
    );
}
export default ShirdiPackage;