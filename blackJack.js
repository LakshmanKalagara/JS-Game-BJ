let cards =[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let classEl = document.querySelector(".class-el")
let player ={
    name:"Lakshman",
    chips: 150
}
let playerEl = document.querySelector("#player-el")
playerEl.textContent = `${player.name} : $${player.chips}`

function getRandomCard(){
    let randomNumber = (Math.floor(Math.random()*13))+1
    if (randomNumber === 1){
        return 11
    }else if(randomNumber === 11 || randomNumber === 12 || randomNumber === 13){
        return 10
    }else {
        return randomNumber
    }
    
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards =[firstCard,secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame(){
    let cardList =""
    sumEl.textContent = "Sum : "+sum    
    for(i=0;i<cards.length;i++){
        cardList += cards[i]+" "
    }
    classEl.textContent = `cards : ${cardList}`
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
         
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false  
    }
    messageEl.textContent = message
}
function newCard(){
    if (hasBlackJack === false && isAlive === true){
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}
