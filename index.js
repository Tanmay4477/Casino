let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");
let animationId;
const startButton = document.getElementById("startButton");
const result = document.getElementById("result");
const values = ["🍋", "🍍", "🥕", "🍒"];

function startSlotMachine() {  
    if (animationId) clearInterval(animationId);

    animationId = setInterval(() => {
        value1.innerText = randomNumber();
        value2.innerText = randomNumber();
        value3.innerText = randomNumber();
    }, 100);

    setTimeout(() => {
        clearInterval(animationId);
        checkResult();
    }, 1000)
}


function randomNumber() {
    return values[Math.floor(Math.random() * values.length)];
}

function checkResult() {
    if(value1.innerText === value2.innerText && value2.innerText === value3.innerText) {
        result.textContent = "Jackpot 🎉!";
        result.style.color = "gold";
    }
    else {
        result.textContent = "Better Luck Next Time";
        result.style.color = "white";
        console.log("Fuck off");
    }
}

startButton.addEventListener("click", startSlotMachine);