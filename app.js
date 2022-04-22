function run() {
    playerCard()
    computerCard()
}

function playerCard() {
    var r = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4)
    let x = document.getElementById("player")
    x.insertAdjacentHTML("beforeend", "<img src=images/" + r + suitArray[randomSuit] + ".jpg>")
    return r
} 

function computerCard() {
    var rC = Math.floor(Math.random() * 10) + 1
    var suitArrayC = ["C", "D", "H", "S"]
    var randomSuitC = Math.floor(Math.random() * 4)
    let y = document.getElementById("computer")
    y.insertAdjacentHTML("beforeend", "<img src=images/" + rC + suitArrayC[randomSuitC] + ".jpg>")
    return rC
} 

function player() {
    let pT = document.getElementById("playerA")
    pT.innerHTML = "Player Total is " + r + ".";
}

function computer() {
    let cT = document.getElementById("computerA")
    cT.innerHTML = "Computer Total is " + rC + ".";
}

function noCards() {
    computerCard()
    computerCard()
    computerCard()
    computerCard()
    player()
    computer()
}

function reload() {
    document.location.reload()
}