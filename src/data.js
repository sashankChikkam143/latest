import navLocationIcon from "./assets/search-nav/nav-location-icon.svg";
import navBikeIcon from "./assets/search-nav/nav-bike-icon.svg";
import navCalendarIcon from "./assets/search-nav/nav-calendar-icon.svg";
import navGroupIcon from "./assets/search-nav/nav-group-icon.svg";
import ratingFour from "./assets/hotels-restaurants/rating-4.svg";
import ratingFive from "./assets/hotels-restaurants/rating-5.svg";

import eastVillageImg from "./assets/travel/east-village.svg";
import brooklynImg from "./assets/travel/brooklyn.svg";

import sailingImg from "./assets/activities/sailing.svg";
import climbingImg from "./assets/activities/climbing.svg";
import skiingImg from "./assets/activities/skiing.svg";
import hikingImg from "./assets/activities/hiking.svg";

import airporttaxiimg from "./assets/services/airporttaxi.svg";
import baggagetransferimg from "./assets/services/baggagetransfer.svg";
import corporatetaxiimg from "./assets/services/corporatetaxi.svg";
import privatedriverimg from "./assets/services/privatedriver.svg";

import sriimg1 from "./assets/srisailam/srisailam1.svg";
import sriimg2 from "./assets/srisailam/srisailam2.svg";
import sriimg3 from "./assets/srisailam/srisailam3.svg";
import sriimg4 from "./assets/srisailam/srisailam4.svg";
import sriimg5 from "./assets/srisailam/srisailam5.svg";
import sriimg6 from "./assets/srisailam/srisailam6.svg";

import tir1 from "./assets/tirumala/tir1.svg";
import tir2 from "./assets/tirumala/tir2.svg";
import tir3 from "./assets/tirumala/tir3.svg";
import tir4 from "./assets/tirumala/tir4.svg";
import tir5 from "./assets/tirumala/tir5.svg";
import tir6 from "./assets/tirumala/tir6.svg";

import vijay1 from "./assets/vijayawada/vijay1.svg";
import vijay2 from "./assets/vijayawada/vijay2.svg";
import vijay3 from "./assets/vijayawada/vijay3.svg";
import vijay4 from "./assets/vijayawada/vijay4.svg";

import shri1 from "./assets/shirdi/srisailam1.svg";
import shri2 from "./assets/shirdi/srisailam2.svg";
import shri3 from "./assets/shirdi/srisailam3.svg";

import yad1 from "./assets/yadagiri/yadagiri1.svg";
import yad2 from "./assets/yadagiri/yadagiri2.svg";
import yad3 from "./assets/yadagiri/yadagiri3.svg";

import badri1 from "./assets/badrachalam/srisailam1.svg";
import badri2 from "./assets/badrachalam/srisailam2.svg";
import badri3 from "./assets/badrachalam/srisailam3.svg";

export const navItems = [
  {
    id: 1,
    name: "Home",
    url: "/home"
  },
  {
    id: 2,
    name: "Services",
    url: "/services"
  },
  {
    id: 3,
    name: "Tours",
    url: "/tours"

  },
  {
    id: 4,
    name: "Contact",
    url: "/contact"
  },
  {
    id: 5,
    name: "About",
    url: "/about"
  },
];

export const searchNavItems = [
  {
    id: 1,
    normalText: "Location",
    boldText: "Explore nearby locations",
    icon: navLocationIcon,
  },
  {
    id: 2,
    normalText: "Activity",
    boldText: "All activities",
    icon: navBikeIcon,
  },
  {
    id: 3,
    normalText: "When",
    boldText: "Choose a Date",
    icon: navCalendarIcon,
  },
  {
    id: 4,
    normalText: "Guests",
    boldText: "1 guest",
    icon: navGroupIcon,
  },
];

export const destinations = [
  {
    id: 1,
    name: "SRISAILAM",
    location: "Srisailam, AP",
    image: sriimg1,
  },
  {
    id: 2,
    name: "VIJAYAWADA",
    location: "Vijayawada, AP",
    image: vijay1,
  },
  {
    id: 3,
    name: "BADRACHALAM",
    location: "Kothagudem, TELANGANA",
    image: badri1,
  },
  {
    id: 4,
    name: "SHIRDI",
    location: "Ahmednagar, MAHARASTRA",
    image: shri1,
  },
  {
    id: 5,
    name: "TIRUMALA",
    location: "Tirupati, AP",
    image: tir1,
  },
];

export const hotelsRestaurants = [
  {
    id: 1,
    name: "SRISAILAM",
    location: "Srisailam, AP",
    image: sriimg1,
    ratingImage: ratingFive,
  },
  {
    id: 2,
    name: "TIRUMALA",
    location: "Tirupati, AP",
    image: tir1,
    ratingImage: ratingFive,
  },
  {
    id: 3,
    name: "SHIRDI",
    location: "Ahmednagar, MAHARASTRA",
    image: shri1,
    ratingImage: ratingFour,
  },
  {
    id: 4,
    name: "VIJAYAWADA",
    location: "Vijayawada, AP",
    image: vijay1,
    ratingImage: ratingFour,
  },
];

export const travelItems = [
  {
    id: 1,
    image: eastVillageImg,
    location: "East Village Ice Cream Crawl",
    text: "We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour.At each ice cream store we'll explore the story behind the business and see what makes the ice cream unique as you savor every…",
    calendarText: "Today",
    userText: "Maria Philips",
    commentsText: "2",
  },
  {
    id: 2,
    image: brooklynImg,
    location: "Brooklyn Bridge cinematic photo walk",
    text: "This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I’m always open to capture clients at different locations upon request for an additional charge. ",
    calendarText: "Today",
    userText: "James Calzoni",
    commentsText: "17",
  },
];

export const activities = [
  {
    id: 1,
    name: "Sailing",
    image: sailingImg,
  },
  {
    id: 2,
    name: "Climbing",
    image: climbingImg,
  },
  {
    id: 3,
    name: "Skiing",
    image: skiingImg,
  },
  {
    id: 4,
    name: "Hiking",
    image: hikingImg,
  },
];

export const srisailamimages = [
  {
    id: 1,
    name: "DAM",
    image: "https://static2.tripoto.com/media/filter/tst/img/292917/TripDocument/1541089680_maxresdefault_1.jpg"
  },
  {
    id: 2,
    name: "GHATROAD",
    image: "https://srisailamtourism.com/images/places-to-visit/mallela-theertham-srisailam-tourism-entry-fee-timings-holidays-reviews-header.jpg",
  },
  {
    id: 3,
    name: "PATHALAGANGA",
    image: "https://blogs.revv.co.in/blogs/wp-content/uploads/2020/10/Srisailam.jpg",
  },
  {
    id: 4,
    name: "ROPEWAY",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ea/0c/37/cottages-by-srisailam.jpg?w=700&h=-1&s=1",
  },
  {
    id: 5,
    name: "MALLI KARJUNA TEMPLE",
    image: "https://srisailamtourism.com/images/places-to-visit/headers/mallela-theertham-waterfalls-srisailam-entry-fee-timings-holidays-reviews-header.jpg",
  },
  {
    id:6,
    name: "SRISAILAM TEMPLE",
    image: "https://static.wixstatic.com/media/896d82_64bea7a7281743219b0ebfeabfbfa5e1~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/896d82_64bea7a7281743219b0ebfeabfbfa5e1~mv2.jpg",
  },
];

export const serviceitems = [
  {
    id: 1,
    name: "Private Driver",
    image: privatedriverimg,
  },
  {
    id: 2,
    name: "Airport Taxi",
    image: airporttaxiimg,
  },
  {
    id: 3,
    name: "Luggage Transfer",
    image: baggagetransferimg,
  },
  {
    id: 4,
    name: "Corporate Taxi",
    image: corporatetaxiimg,
  },
];


export const tirumalaimages = [
  {
    id: 1,
    name: "TIRUMALA",
    image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2020/02/Chakra-Theertham-Waterfalls_20th-feb.jpg",
  },
  {
    id: 2,
    name: "DAM",
    image: "https://www.trawell.in/admin/images/upload/153110520KapilaTheertham_Main.jpg",
  },
  {
    id: 3,
    name: "WATERFALL",
    image: "https://cms.tstdc.in/fetch?payload=bb6c033a-b0f4-4584-8c2c-609ffc116839.jpg",
  },
  {
    id: 4,
    name: "SVZOO",
    image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/04/deer-park.jpg",
  },
  {
    id: 5,
    name: "GARUDA STATUE",
    image: "https://www.financialexpress.com/wp-content/uploads/2019/10/Tirupati-Temple-Aptourism-660.jpg",
  },
  {
    id:6,
    name: "ENTRANCE",
    image: "https://content.jdmagicbox.com/comp/tirupati/w7/9999px877.x877.221201230039.e8w7/catalogue/garuda-venkateswara-natural-rock-form-tirumala-tirupati-tourist-attraction-cvx5qjc6q3.jpg",
  },
  {
    id:7,
    name: "ENTRANCE",
    image: "https://www.touristplaces.net.in/images/pp/6/p129169.jpg"
  },
];


export const vijayawadaimages = [
  {
    id: 1,
    name: "KANAKADURGAMMA TEMPLE",
    image: vijay1
  },
  {
    id: 2,
    name: "PRAKASAM BARRAGE",
    image: vijay2,
  },
  {
    id: 3,
    name: "BHAVANI ISLAND",
    image: vijay3,
  },
  {
    id: 4,
    name: "WATER GAMES",
    image: vijay4,
  },
];


export const shirdiimages = [
  {
    id: 1,
    name: "SAIBABA TEMPLE",
    image: shri1,
  },
  {
    id: 2,
    name: "SAIBABA TEMPLE",
    image: shri2,
  },
  {
    id: 3,
    name: "SAIBABA TEMPLE",
    image: shri3,
  },
];


export const badrachalamimages = [
  {
    id: 1,
    name: "SRIRAMA TEMPLE",
    image: badri1,
  },
  {
    id: 2,
    name: "PARNASHALA",
    image: badri2,
  },
  {
    id: 3,
    name: "NIGHT VIEW",
    image: badri3,
  },
];


export const yadagiriimages = [
  {
    id: 1,
    name: "MAINTEMPLE",
    image: yad1,
  },
  {
    id: 2,
    name: "NIGHTVIEW",
    image: yad2,
  },
  {
    id: 3,
    name: "TEMPLE",
    image: yad3,
  },
];


