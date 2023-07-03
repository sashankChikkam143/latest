import React from "react";
import { Container ,Box, Button, Grid,Typography,IconButton} from "@mui/material";
import { useState } from "react";
import { ArrowRight ,ArrowLeft} from "@mui/icons-material";

export default function ImageSlider(props) {
    const [index,setIndex]=useState(1);
    const Images=props.Images;
  return (
    <Container sx={{mt:5}}>
        <Grid container>
            <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            sm={2}
            >
           <IconButton variant="contained" onClick={()=>{
                if(index==1)
                {
                    setIndex(Images.length);
                }
                else
                {
                    setIndex(index-1);
                }
            }}><ArrowLeft fontSize="large"/></IconButton>
            </Grid>
            <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            sm={8}
            >
           <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: {
            xs: "50vw",
            sm: "55vw",
            md: "auto",
          },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={Images.find(image=> {return image.id==index}).image}
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
        {Images.find(image=> {return image.id==index}).name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          alignItems: {
            xs: "flex-start",
            lg: "center",
          },
          justifyContent: "space-between",
          gap: 1,
          mt: 1.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "13px",
              color: "#979797",
            }}
          >
           {props.place}
          </Typography>
        </Box>
      </Box>
    </Box>
            </Grid>
            <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            sm={2}
            >
            <IconButton onClick={()=>{
                if(index==Images.length)
                {
                    setIndex(1);
                }
                else
                {
                    setIndex(index+1);
                }
            }}><ArrowRight fontSize="large"/></IconButton>
            </Grid>
        </Grid>
    </Container>
  );
}