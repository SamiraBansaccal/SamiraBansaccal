

  let score = 0;
  let interval = 0;
  let grid = document.createElement("div");
  document.body.appendChild(grid);
  grid.classList.add("container");
  for (let i=0; i<12; i++){
    let holes = document.createElement("div");
    grid.appendChild(holes);
    holes.classList.add("holes")
  }
  let startButton = document.createElement("button");
  grid.appendChild(startButton);
  startButton.innerText="START";
  startButton.classList.add("start");

  let scored = document.createElement("div");
  grid.appendChild(scored);
  scored.innerText=`SCORE = ${score}`
  scored.classList.add("score");

let randomize = () => {
  const holes = document.querySelectorAll('.holes');
  const randomhole = holes[Math.floor(Math.random() * holes.length)]
  randomhole.classList.add("mole");
  const remove = () => {randomhole.classList.remove("mole")};
    setTimeout(remove, 500);
  interval++
  if (interval>=10){
    clearInterval(randomize)
    startButton.classList.remove("started")
  }
  console.log(interval)
}
let startGame = () =>{
  setInterval(randomize, 500);
  startButton.classList.add("started")
}
startButton.addEventListener("click", startGame)
