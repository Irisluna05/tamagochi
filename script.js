const titel = document.querySelector("h1");
let tamagochi = document.querySelector("#main");
const btn = document.querySelector("#ketting");
const btn2 = document.querySelector("#eten");
const pElement = document.querySelector("#tekst");
const restartBtn = document.querySelector("#restart");

let muziekje = new Audio("audio/cardinal.mp3"); //Bron Thomas Plas en Mozilla

let happy = new Audio("audio/happy.mp3")
let hungerbalk = document.querySelector("#hunger");
let hunger = 0;

function verhoogHunger() {
    if (hunger < 10) {
        hunger += 1;
    }
    hungerbalk.value = hunger;
    updateText();
    checkHungerLevel();
}

setInterval(verhoogHunger, 2000); 

function verlaagHunger() {
    if (hunger > 0) {
        hunger -= 1;
        hungerbalk.value = hunger;
        happy.play();
        changeImage();
        updateText();
    }
}

function updateText() {
    if (hunger > 5) {
        pElement.textContent = "Ik heb honger";
        tamagochi.src = './images/vogel2.png';
    } else {
        pElement.textContent = "Hallo";
    }
}

function checkHungerLevel() {
    if (hunger >= 10) {
        tamagochi.src = './images/vogelsad.png';
        pElement.textContent = "Ik wil nu ETEN";
        restartBtn.style.visibility = 'visible'; 
        btn2.disabled = true;
    } else {
                restartBtn.style.visibility = 'hidden';
                btn2.disabled = false; 
     }
}

function changeImage() {
    tamagochi.src = './images/vogeleat.png';
}

function restartSpel() {
            hunger = 0;
            hungerbalk.value = hunger;
            pElement.textContent = "Hallo";
            tamagochi.src = './images/vogel.png';
            restartBtn.style.visability = 'hidden';
            btn2.disabled = false; 
            muziekje.play();
        }


btn2.addEventListener("click", verlaagHunger);
restartBtn.addEventListener("click", restartSpel);

