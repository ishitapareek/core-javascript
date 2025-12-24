let sum = 0

let cards = document.getElementById("cards")
let cardsum = document.getElementById("sum")

let hasBlackJack = false
let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el")

let player = {
    name: "Player",
    chips: 100
}

let playerScore = document.getElementById("player")
playerScore.textContent = player.name + ": $" + player.chips


function getRandomCard(){
    let card = Math.floor(Math.random() * 13 + 1)

    if (card === 1){
        return 11
    }

    if (card >= 11){
        return 10
    }

    return card


}

function startGame(){
    firstCard = getRandomCard()
    secondCard = getRandomCard()

    cardsArray = [firstCard, secondCard]

    sum = firstCard + secondCard
    isAlive = true

    cards.textContent = "Cards: " + cardsArray[0] + ' ' + cardsArray[1]

    cardsum.textContent = "Sum: " + sum

    renderGame()
}

function renderGame(){
    if (sum < 21){
    message = "Draw new card"
    }

    else if (sum === 21){
        message = "win"
        hasBlackJack = false
    }

    else{
        message = "Lose"
        isAlive = false
    }

    messageEl.textContent = message
}

function getNewCard(){
    if (isAlive && hasBlackJack === false){
        let newCard = getRandomCard()
        sum += newCard
        cardsArray.push(newCard)
        cardsum.textContent = "Sum: " + sum
        
        let cardsStr = ""

        for (let index = 0; index < cardsArray.length; index++){
            cardsStr += cardsArray[index] + ' '
        }    
        
        cards.textContent = "Cards: " + cardsStr

        renderGame()
    }
}