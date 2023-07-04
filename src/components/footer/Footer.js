import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import {blueGrey} from "@mui/material/colors";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor:blueGrey[900],
        color:blueGrey[50],
        p: 5,
        mt:6,
        ml:0,
        mr:0,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are <span>GRRTOURS&CABSSERVICES</span>, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6"  gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" >
              Shamshabad, Hyderabad
            </Typography>
            <Typography variant="body2" >
              Email: grrtourstravels@gmail.com
            </Typography>
            <Typography variant="body2" >
              Phone: 8522058851
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6"  gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box
        sx={{mt:2,
          display: "flex",
          justifyContent: "center",
        }}
      >
          <a href="=+918522058851"><Button variant="contained">CALL US</Button></a>
        </Box>
        <Box mt={5}>
          <Typography variant="body2" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              GRRTOURS&CABSSERVICES
            </Link>{" "}
            All Rights Reserved 
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}