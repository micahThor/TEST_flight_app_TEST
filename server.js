'use strict';

const superagent = require('superagent');
require('dotenv').config();


const url = `https://adsbexchange-com1.p.rapidapi.com/registration/A6-EOL/`;


superagent.get(url)
  .set('x-rapidapi-host', `adsbexchange-com1.p.rapidapi.com`)
  .set('x-rapidapi-key', `${process.env.FLIGHT_API_KEY}`).then(dataFromEndpoint => {

    console.log(dataFromEndpoint.body);

  }).catch(err => {
    console.error(err);
    response.status(500).send('Status 500: Internal Server Error');
  });