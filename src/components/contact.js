import { useState } from "react";
import { useRef } from "react";
import { TextField, Button, Typography, Box ,Container} from "@mui/material";
import Footer from "./footer";
import emailjs from "@emailjs/browser"

const ContactForm=()=>{
const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formref=useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0g2q9hp', 'template_37l0aro', formref.current, '5i3MnwSse77iVrti5')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });


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
            Submit
          </Button>
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