const cardIcon = ["/assets/img/clubs.png", "/assets/img/diamonds.png", "/assets/img/like.png", "/assets/img/spades.png"]
const cardNumber = document.querySelector("#number")
const cardIconTop = document.querySelector("#imgTop")
const cardIconBtm = document.querySelector("#imgBtm")

window.onload = function() {
    let random = Math.round(Math.random() * 10)
    let iconGenerator
    do {
        iconGenerator = Math.floor(Math.random() * 10)
    } while (iconGenerator > 3)
    cardIconTop.innerHTML = `<img class="left-img" src="${cardIcon[iconGenerator]}" alt="clubs">`
    cardNumber.innerHTML = `<h1 class="fs-custom">${random}</h1>`
    cardIconBtm.innerHTML = `<img class="right-img" src="${cardIcon[iconGenerator]}" alt="clubs">`
}