
let title = document.createElement("h1");
document.body.appendChild(title);
title.innerText = "Please enter your Adress";

let input = document.createElement("input");
document.body.appendChild(input);

let button = document.createElement("button");
document.body.appendChild(button);
button.innerText = "fetch Mapbox";
button.addEventListener('click', (e)=>{
    let myAdress= input.value;
    console.log(myAdress);
    let accessToken = `access_token=pk.eyJ1Ijoic2FtaXJhYmFuIiwiYSI6ImNsMHI3OGY0MTAwb2ozZHBuajE0M2lxaXUifQ.IEbMYGKgenWDrsbyM_LNOg`
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${myAdress}.json?${accessToken}`)
    .then(response => response.json())
    .then(data => console.log(data));
});


