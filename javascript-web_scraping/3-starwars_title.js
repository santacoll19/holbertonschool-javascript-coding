#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];

const url = `https://swapi-api.hbtn.io/api/films/${movieId}/`;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error fetching SWAPI:', error);
    return;
  }

  const data = JSON.parse(body);
  console.log(data.title);
});
