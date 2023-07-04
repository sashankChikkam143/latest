import { useState } from "react";
import { useRef } from "react";
import { TextField, Button, Typography, Box ,Container} from "@mui/material";
import Footer from "./footer";
import emailjs from "@emailjs/browser";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { sleep } from "./sleep";


const ContactForm=()=>{

  const navigate = useNavigate();
const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formref=useRef();

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello siddhu");
    emailjs.sendForm('service_0g2q9hp', 'template_37l0aro', formref.current, '5i3MnwSse77iVrti5')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    setOpen(true);
    sleep(2000).then(()=>{
      navigate("/home");
    })
  };
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
            Contact Us
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
            Please submit the Details then our agent will contact soon.
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
        <form ref={formref} onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name='user_name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            name='user_email'
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="message"
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            submit
          </Button>
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
          Details submitted sucessfully
        </Alert>
      </Snackbar>
    </Stack>
        </form>
        </Box>
      </Box>
      <Box sx={{mt:2}}>
         <Footer/>
     </Box>
    </Container>
    );
}


export default ContactForm;