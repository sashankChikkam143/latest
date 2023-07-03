import Navbar from "./components/navbar/Navbar";
import Home from './components/homepage';
import Services from "./components/services";
import ImageSlider from "./components/imageSlider";
import { srisailamimages  } from "./data";
import { tirumalaimages,badrachalamimages,vijayawadaimages,shirdiimages,yadagiriimages } from "./data";
import { Alert, Box } from "@mui/material";
import ShirdiPackage from "./components/shirdipackage";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tours from "./components/tours";
import ContactForm from "./components/contact";
import StandardImageList from "./components/imageList";
import AboutUs from "./components/about-us/AboutUs";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Box sx={{mt:5}}>
      <Routes>
        <Route>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Tours" element={<Tours />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />

        </Route>
      </Routes>
    </Box>
  </BrowserRouter>

    

  //   <>
  //     <Navbar/>
  //     <div>
  //    {/* <ContactForm/> */}
  //    {/* <Home/> */}
  //    {/* <ImageSlider Images={srisailamimages} place="SRISAILAM"/>
  //    <ImageSlider Images={tirumalaimages} place="TIRUMALA"/>
  //    <ImageSlider Images={badrachalamimages} place="BADRACHALAM"/>
  //    <ImageSlider Images={vijayawadaimages} place="VIJAYAWADA"/>
  //    <ImageSlider Images={shirdiimages} place="SHIRDI"/>
  //    <ImageSlider Images={yadagiriimages} place="YADAGIRIGUTTA"/> */}
  //    {/* <StandardImageList/> */}
    
  //  {/* <ImageSlider Images={srisailamimages} place="siddhu"/> */}
  //  <ShirdiPackage/>
  //     </div>
  //   </>
  );
}

export default App;

// https://gotirupati.com/srisailam-tour-packages-from-bangalore-by-bus-train-car-and-flight/
// https://tripnetra.com/blog/srisailam-tour-package-from-bangalore
