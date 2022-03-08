

//not used yet
const _initTime = Date.now()
function getElapsedTime(){
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}
// fonction clickOnSquare+log pas encore utilisés
function clickOnSquare(e){
  const wrapper = document.querySelector(".displayedsquare-wrapper");
  const div = document.createElement("div");
  wrapper.append(div);
  div.classList = e.target.classList;
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  ul.append(li);
  const color = e.target.classList[1];
  li.innerText = `[${getElapsedTime}] Create a new ${color} square`;
  
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
}
/* bodyEvent = () =>{
  if (KeyCode===32){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  }
}
const bodyEvent = document.body.addEventListener("keypress", keypressEvent)
*/

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', clickOnSquare)
}

