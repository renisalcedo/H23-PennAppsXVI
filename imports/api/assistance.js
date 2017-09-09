import React, {Component} from 'react';
import axios from 'axios';

const data = {
  "lng" : -81.08322143554688,
  "lat":  26.749004778750272,
  "mile": 10
};

export let assistance = () => {
  axios.post('http://cec0c656.ngrok.io/location', data)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}
