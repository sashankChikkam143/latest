import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Box, Drawer, Typography ,Button} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logoimage from '../rjrlogo.jpg';
import { useNavigate } from "react-router-dom";
import { navItems } from "../../data.js";


const Navbar = () => {
  const navigate=useNavigate();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <AppBar position="fixed" elevation={0}>
      <Container
        maxWidth="xl"
        sx={{
          px: 10,
          pt: 3,
          pb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
        disableGutters
      >
        <Box
        component="img"
        sx={{ height: 54 }}
        alt="Logo"
        src={logoimage}
      />
      {/* <Typography variant="h5"> <DirectionsCarFilled/>RJRTRAVELS</Typography> */}
        <Box
          sx={{
            display: {
              xs: "none",
              lg: "flex",
            },
            alignItems: "center",
            justifyContent:"space-evenly",
            gap: "54px",
          }}
        >
          {navItems.map((navItem) => (

            <Button variant='contained' onClick={()=>
            {
              navigate(navItem.url);

            }}>  {navItem.name}</Button>
          ))}
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              lg: "flex",
            },
            alignItems: "center",
            gap: "8px",
          }}
        >
        </Box>
        <MenuIcon
          sx={{
            display: {
              xs: "block",
              lg: "none",
            },
            cursor: "pointer",
            color: "#fff",
          }}
          onClick={() => setOpenMobileMenu(true)}
        />
        <Drawer
          anchor="left"
          open={openMobileMenu}
          onClose={() => setOpenMobileMenu(false)}
        >
          <Box
            sx={{
              position: "relative",
              width: 250,
              backgroundColor: "#5243C2",
              height: "100%",
              py: 3,
              px: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 5,
            }}
            role="presentation"
            onClick={() => setOpenMobileMenu(false)}
            onKeyDown={() => setOpenMobileMenu(false)}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
              }}
            >
              {navItems.map((navItem) => (
                <Button variant='contained'  onClick={()=>
                  {
                    navigate(navItem.url);
      
                  }}>  {navItem.name}</Button>
              ))}
            </Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "500",
                cursor: "pointer",
                position: "absolute",
                bottom: "14px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              &#169; RJRTRAVELS
            </Typography>
          </Box>
        </Drawer>
      </Container>
    </AppBar>
  );
};
export default Navbar;
