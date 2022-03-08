let word = "Prout";
let letters = word.split("");
let paragraph = document.createElement("p");
document.body.appendChild(paragraph);

let i = 0;
const prout = () =>{
  paragraph.innerText += letters[i];
  i++;

  if (i>=letters.length) {
    clearInterval(myInterval);
  }
}
const myInterval = setInterval(prout,500);
