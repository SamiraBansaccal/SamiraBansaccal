
let title = document.createElement("h1");
document.body.appendChild(title);
title.innerText = "Please enter your Adress";

let input = document.createElement("input");
document.body.appendChild(input);

let button = document.createElement("button");
document.body.appendChild(button);
button.innerText = "fetch Mapbox";

let div = document.createElement("div");
document.body.appendChild(div);
div.setAttribute("id", "map")

//Fetch the coordinates
button.addEventListener('click', (e)=>{
    let myAdress= input.value;
    let accessToken = `access_token=pk.eyJ1Ijoic2FtaXJhYmFuIiwiYSI6ImNsMHI3OGY0MTAwb2ozZHBuajE0M2lxaXUifQ.IEbMYGKgenWDrsbyM_LNOg`
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${myAdress}.json?${accessToken}`)
    .then(response => response.json())
    .then(data => console.log(data));
});

//Add the map
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtaXJhYmFuIiwiYSI6ImNsMHI3OGY0MTAwb2ozZHBuajE0M2lxaXUifQ.IEbMYGKgenWDrsbyM_LNOg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});

