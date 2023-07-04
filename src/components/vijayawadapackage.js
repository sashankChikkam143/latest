import { Typography,Box,Container,Button ,Chip,Divider} from "@mui/material";
import image from "../assets/vijayawada/vijay1.svg";
import React from "react";
import Footer from "./footer/Footer";
import { teal ,pink} from "@mui/material/colors";
import IncludeDialogBox from "./includedialogbox";
import ExcludeDialogBox from "./excludedialogbox";
import { packagecars } from "../data";
import MultiActionAreaCard from "./card";

const VijayawadaPackage=()=>{

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
        VIJAYAWADA TOUR PACKAGE DETAILS
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
       VIJAYAWADA
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
       Kanaka Durga Temple, also known as Sri Kanaka Durgamma Devasthanam is a Hindu temple dedicated to Goddess Kanaka Durga. The deity in this temple is also popularly referred as Kanaka Durga. The temple is located in Vijayawada, Andhra Pradesh, India on the Indrakeeladri Hills on the banks of Krishna River.
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
    <Chip label="TRIP INCLUDES" />
    <list>
      <li>Sri Durga Malleswara Swamy Temple</li>
      <li>Prakasam Barrage</li>
      <li>Bapu museum</li>
      <li>Bhavani Island</li>
      <li>Undavalli Caves</li>
      <li>Mogalaraja puram caves</li>
      <li>Konda Palli Fort</li>
      <li>Water Games</li>
      <li>Durgamma Ghat</li>

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
        AVAILABLE VECHILES
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
    {packagecars.map((car)=><MultiActionAreaCard {...car}/>)}
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
     To know About Vijayawada Kanaka Durgamma Darshanam Timings
     <a href="https://kanakadurgamma.org/en-in/sevas-and-darshanam" target="_blank"><Button variant="contained">Click Here</Button></a>
    </Typography>
  </Box>
  <Box sx={{mt:5}}>
    <Footer/>
  </Box>
</Container>
);
}
export default VijayawadaPackage;