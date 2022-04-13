function run() {
    playerCard()
    computerCard()
}

function playerCard() {
    var r = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4)
    document.getElementById("player").insertAdjacentHTML("beforeend", "<img src=images/" + r + suitArray[randomSuit] + ".jpg>")
    return r
} 

function computerCard() {
    var c = Math.floor(Math.random() * 10) + 1
    var suitArrayC = ["C", "D", "H", "S"]
    var randomSuitC = Math.floor(Math.random() * 4)
    document.getElementById("computer").insertAdjacentHTML("beforeend", "<img src=images/" + c + suitArrayC[randomSuitC] + ".jpg>")
    return c
} 

function playerTotal() {
    let a = r
    document.getElementById("pTotal").innerHTML = "Player Total is " + r + "."
}