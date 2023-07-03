import React from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const ServiceItem = ({ name, image}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: {
            xs: "70vw",
            sm: "60vw",
            md: "auto",
          },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={image}
          alt=""
          style={{ width: "100%", objectFit: "cover", cursor: "pointer" }}
        />
      </Box>
      <Typography
        sx={{
          mt: 1.25,
          fontFamily: "Poppins",
          fontWeight: "500",
          fontSize: "16px",
          color: "#161414",
          maxWidth: "252px",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default ServiceItem;