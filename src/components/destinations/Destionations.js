import React from "react";

import { Box, Container, Typography,Button } from "@mui/material";


import { destinations } from "../../data";
import DestinationItem from "../destination-item";
import { East, EastRounded } from "@mui/icons-material";

const Destionations = () => {
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
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "32px",
          color: "#161414",
          mb: 8,
          textAlign: {
            xs: "center",
            md: "left",
          },
        }}
      >
        Popular Tourist Places
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: {
            xs: 4,
            md: 1,
          },
          justifyContent: "space-between",
          alignItems: {
            xs: "center",
            md: "flex-start",
          },
        }}
      >
        {destinations.map((destination) => (
          <DestinationItem
            key={destination.id}
            name={destination.name}
            location={destination.location}
            image={destination.image}
          />
        ))}
      </Box>
      <Box sx={{mt:5,display:"flex", justifyContent: "center",}}>
      <Button endIcon={<East />} variant="contained">MoreDetails</Button>
      </Box>
    </Container>
  );
};

export default Destionations;
