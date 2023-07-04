import Navbar from "./components/navbar/Navbar";
import Home from './components/homepage';
import Services from "./components/services";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { AddIcCall } from "@mui/icons-material";
import Tours from "./components/tours";
import ContactForm from "./components/contact";
import AboutUs from "./components/about-us/AboutUs";
import ShirdiPackage from "./components/shirdipackage";
import TirumalPackage from "./components/tirumalapackage";
import VijayawadaPackage from "./components/vijayawadapackage";
import SrisailamPackage from "./components/srisailampackage";
import BadrachalamPackage from "./components/badrachalampackage";
import YadagiriguttaPackage from "./components/yadagiriguttapackage";
import About from "./components/about-us/about";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Box position="fixed" sx={{mt:15,mr:0}}>
    <a href="=+918522058851" ><IconButton size="large" color="success">
      <AddIcCall fontSize="large"/>
      </IconButton></a>
    </Box>
    <Box sx={{mt:5}}>
      <Routes>
        <Route>
        <Route path="/"  exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Tours" element={<Tours />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/services" element={<Services />} />
          <Route path="/srisailampackage" element={<SrisailamPackage />} />
          <Route path="/tirupatipackage" element={<TirumalPackage/>} />
          <Route path="/badrachalampackage" element={<BadrachalamPackage />} />
          <Route path="/yadagiriguttapackage" element={<YadagiriguttaPackage />} />
          <Route path="/vijayawadapackage" element={<VijayawadaPackage />} />
          <Route path="/shirdipackage" element={<ShirdiPackage />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Box>
  </BrowserRouter>
  );
}

export default App;

// https://gotirupati.com/srisailam-tour-packages-from-bangalore-by-bus-train-car-and-flight/
// https://tripnetra.com/blog/srisailam-tour-package-from-bangalore

//rootuser Grrtourstravels@2023


// innova 1day trip 10000
// 2 days 13000
// innova swift desire
