import React from "react";
import { Container,Box,Typography } from "@mui/material";
import MultiActionAreaCard from "./card";
import { cars } from "../data";
import { teal } from "@mui/material/colors";

const CarRental = ()=>{
   return(
    <Container sx={{mt:4}}>
        <Box sx={{mt:10, backgroundColor:teal[900], display: "flex",
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
            CAR RENTALS
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
        {cars.map((car)=><MultiActionAreaCard {...car}/>)}
        </Box>
    </Container> 
   );


}
export default CarRental;