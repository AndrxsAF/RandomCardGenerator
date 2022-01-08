const cardIcon = ["clubs.png", "diamonds.png", "like.png", "spades.png"]
const cardNumber = document.querySelector("#number")
const cardIconTop = document.querySelector("#imgTop")
const cardIconBtm = document.querySelector("#imgBtm")

window.onload = function() {
    let iconGenerator, random
    do {
        random = Math.round(Math.random() * 10)
    } while (random == 0)
    do {
        iconGenerator = Math.floor(Math.random() * 10)
    } while (iconGenerator > 3)
    cardIconTop.innerHTML = `<img class="left-img" src="./assets/img/${cardIcon[iconGenerator]}" alt="clubs">`
    cardNumber.innerHTML = `<h1 class="fs-custom">${random}</h1>`
    cardIconBtm.innerHTML = `<img class="right-img" src="./assets/img/${cardIcon[iconGenerator]}" alt="clubs">`
}