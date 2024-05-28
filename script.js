const titel = document.querySelector("h1");
let tamagochi = document.querySelector("#main");
const btn = document.querySelector("#ketting");
const btn2 = document.querySelector("#eten");
const pElement = document.querySelector("#tekst");

let muziekje = new Audio("audio/cardinal.mp3"); //Bron Thomas Plas en Mozilla
muziekje.play();

let happy = new Audio("audio/happy.mp3")
let hungerbalk = document.querySelector("#hunger");
let hunger = 0;

function verhoogHunger() {
    if (hunger < 10) {
        hunger += 1;
    }
    hungerbalk.value = hunger;
    changeImageback();
    updateText();
    checkHungerLevel();
}

setInterval(verhoogHunger, 2000); //Bron theorie uit de les

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
    } else {
        pElement.textContent = "Hallo";
    }
}

function checkHungerLevel() {
    if (hunger >= 10) {
        tamagochi.src = 'images/vogelsad.png';
        pElement.textContent = "Ik wil nu ETEN";
    } else {
        tamagochi.src = 'images/vogel3.png';
    }
}

function changeImage() {
    tamagochi.src = 'images/vogel.png';
}

function changeImageback() {
    tamagochi.src = 'images/vogel3.png';
}


btn2.addEventListener("click", verlaagHunger);
setTimeout(changeImageback, 5000);
