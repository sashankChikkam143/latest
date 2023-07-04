import React from "react";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import {Button} from "@mui/material";
import { East } from '@mui/icons-material' 
import { serviceitems } from "../data";
import ServiceItem from "./serviceItem";
import Footer from "./footer/Footer";
import { teal } from "@mui/material/colors";
const Services=()=>{
    return (
        <Container
          disableGutters
          maxWidth="xl"
          sx={{
            px: {
              xs: 2,
              sm: 5,
              md: 10,
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
            SERVICES
          </Typography>
        </Box>
          <Box
            sx={{
              display: "flex",
              mt:5,
              gap: 4,
              justifyContent: "space-between",
              alignItems: {
                xs: "center",
                md: "flex-start",
              },
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            {serviceitems.map((item) => (
              <ServiceItem
                key={item.id}
                name={item.name}
                image={item.image}
              />
            ))}
          </Box>
          <Box sx={{mt:5}}>
            <Footer/>
          </Box>
        </Container>
      );
    };

export default Services;