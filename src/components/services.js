import React from "react";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import {Button} from "@mui/material";
import { East } from '@mui/icons-material' 
import { serviceitems } from "../data";
import ServiceItem from "./serviceItem";
import Footer from "./footer/Footer";
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
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: "center",
              justifyContent: "space-between",
              mb: 8,
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "32px",
                color: "#161414",
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
            >
              Services
            </Typography>
          </Box>
    
          <Box
            sx={{
              display: "flex",
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