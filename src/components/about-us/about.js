import React from "react";
import { Box,Container,Typography,Button } from "@mui/material";
import aboutUsImg from "../../assets/main/about-us-img.svg";
import Footer from "../footer/Footer";
const About = ()=>{

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
                Customer support
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
               We Works 24/7 for Our Customers to an End-to-End Operations, Our Travel Service is available all around Hyderabad and travel anywhere in India. We work as a One-Stop-Shop for all your Travel needs whether it may Local Service, Airport Transfers or any Outstation as we provide a budget car rental Services.
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <img
                src={"https://www.philips.co.in/c-dam/b2bhc/master/About-Us/contact-us/customer-support-lady.jpg"}
                alt=""
                style={{
                  borderRadius: "24px",
                  maxWidth: "100%",
                }}
              />
            </Box>
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
                Benefits
              </Typography>
               <list>
                <li>Affroadable Fares.</li>
                <li>Transparent Billing.</li>
                <li>Surge Free Rides.</li>
                <li>Safe and Secure Rides.</li>
                <li>On Time Service.</li>
                <li>Cancellation Benefit.</li>
               </list>
            </Box>
            <Box sx={{ flex: 1 }}>
              <img
                src={"https://st.depositphotos.com/1003593/4001/i/600/depositphotos_40018629-stock-photo-benefits-white-marker.jpg"}
                alt=""
                style={{
                  borderRadius: "24px",
                  maxWidth: "100%",
                }}
              />
            </Box>
          </Box>
          <Box sx={{mt:6}}>
            <Footer/>
          </Box>
          </Container>
    );

}

export default About;