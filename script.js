const titel = document.querySelector("h1")
let tamagochi = document.querySelector("img")
const btn = document.querySelector ("#ketting")

function changeImage() {document.querySelector("img").src='images/vogel.png'
}

tamagochi.addEventListener("click", changeImage);
