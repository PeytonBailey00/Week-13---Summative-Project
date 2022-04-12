function run() {
    playerCard()
    computerCard()
    playerTotal()
    computerTotal()
}

function playerCard() {
    var r = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4) // 0 to 3
    document.getElementById("player").insertAdjacentHTML("beforeend", "<img src=Cards/" + r + suitArray[randomSuit] + ".jpg>")
} 

function computerCard() {
    var c = Math.floor(Math.random() * 10) + 1
    var suitArray2 = ["C", "D", "H", "S"]
    var randomSuit2 = Math.floor(Math.random() * 4) // 0 to 3
    document.getElementById("computer").insertAdjacentHTML("beforeend", "<img src=Cards/" + c + suitArray2[randomSuit2] + ".jpg>")
}

function playerTotal() {
    let a = document.getElementById("pTotal")
    a.innerHTML = "Your Total is " + r + "."
}

function computerTotal() {
    let b = document.getElementById("cTotal")
    b.innerHTML = "Computer Total is " + c + "."
}