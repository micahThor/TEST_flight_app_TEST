'use strict';

const superagent = require('superagent');
require('dotenv').config();


//////////////////////////////
  ///// EXAMPLE QUERIES /////
//////////////////////////////

// API call with aircraft registration.  Good for tracking flights of a single aircraft.  We can possible save all flights of a single aircraft in our database.
const bySingleAircraftRegistrationURL = `https://adsbexchange-com1.p.rapidapi.com/registration/A6-EOL/`;

// API call with latitude and longitude and distance.  Returns all aircraft within that area's radius.
const byLocationAndWithinRadiusURL = `https://adsbexchange-com1.p.rapidapi.com/json/lat/47.6062/lon/122.3321/dist/25/`;

// API call with a squawk code.  Returns all aircraft with that active sqwuak code.
const bySquawkURL = `https://adsbexchange-com1.p.rapidapi.com/sqk/1200/`;


// use superagent to retrieve data from API endpoints
superagent.get(bySquawkURL)
  .set('x-rapidapi-host', `adsbexchange-com1.p.rapidapi.com`)
  .set('x-rapidapi-key', `${process.env.FLIGHT_API_KEY}`)
  .then(dataFromEndpoint => {

    console.log(dataFromEndpoint.body);

  }).catch(err => {
    console.error(err);
    response.status(500).send('Status 500: Internal Server Error');
  });