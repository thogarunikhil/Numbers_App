const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionE1    = document.getElementById("question");
questionE1.innerText = `What is ${num1} multiply by ${num2} ?`;

const correctAns = num1 * num2;
let inputE1 = document.getElementById('input');
let formE1 = document.getElementById('form');

let score = JSON.parse(localStorage.getItem("score"));

if (!score){
    score = 0;
}

let scoreValue = document.getElementById('score');
scoreValue.innerText = `Score: ${score}`;

formE1.addEventListener("submit", ()=>{
    const userAns = +inputE1.value;
    if (userAns == correctAns){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }
})

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}