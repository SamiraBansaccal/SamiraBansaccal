import * as data from './becode.json';
const word = data;
console.log(word);
const inp = document.createElement("input");
inp.type ="text";
document.body.appendChild(inp);
const but =document.createElement("button");
but.innerHTML="Click Me";
document.body.appendChild(but);



const fetchBecode = ()=> {
    fetch('./becode.json')
    .then(response => response.json())
    .then(json => {
        console.log(json.split(","));
    })
};
but.addEventListener('click', fetchBecode());
