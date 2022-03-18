//Exercice 2
const p = document.createElement("p");
document.body.appendChild(p);

let seconds = 0;
let minutes = 0;

let display = () =>{
    if (minutes==0){
      p.innerText=`${seconds} seconds have passed`
    }
    else if (minutes==1){
      p.innerText=`a minute has passed and ${seconds} seconds`
    }
    else {
      p.innerText=`${minutes} minutes have passed and ${seconds} seconds`;
    }
  }

let timer = () => {
  seconds++;
  if (seconds==60){
    minutes++;
    seconds = 0;
  }
  display();
}
setInterval(timer, 1000);


