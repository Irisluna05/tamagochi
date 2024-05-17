const titel = document.querySelector("h1")
let tamagochi = document.querySelector("#main")
const btn = document.querySelector ("#ketting")
const btn2 = document.querySelector ("#eten")
const praten = document.querySelector("#tekst")
let hungerbalk = document.querySelector ("#hunger")
let hunger = 0

function verhoogHunger() {
    hunger = hunger + 1
    hungerbalk.value = hunger
    changeImageback()
}

setInterval (verhoogHunger,2000)

function verlaagHunger() {
    hunger = hunger - 2
    hungerbalk.value = hunger
    changeImage()
}


const pElement = document.querySelector("#tekst")

function changeImage() {document.querySelector("#main").src='images/vogel.png'}
function changeImageback() {document.querySelector("#main").src='images/vogel3.png'}


    if (hunger.value =+ 8) {
        praten.textContent = "Ik heb honger";
    }
    else if (hunger.value <= 8) {
        praten.textContent = "Hallo";
    }

btn2.addEventListener("click",verlaagHunger);
setTimeout (changeImageback,5000)
