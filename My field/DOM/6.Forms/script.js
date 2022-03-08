/*
*/
const firstInput = document.querySelector('input').value;
const display = (e) => {
    console.log("keyup");
    
    document.getElementById('display-firstname').innerHTML = firstInput;
} 
firstInput.addEventListener('keyup', display);
