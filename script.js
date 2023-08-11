  
     ///card options array
const cardArray = [
    {name: '1', img: 'images/1.png'},
    {name: '1', img: 'images/1.png'},
    {name: '2', img: 'images/2.png'},
    {name: '2', img: 'images/2.png'},
    {name: '3', img: 'images/3.png'},
    {name: '3', img: 'images/3.png'},
    {name: '4', img: 'images/4.png'},
    {name: '4', img: 'images/4.png'},
    {name: '5', img: 'images/5.png'},
    {name: '5', img: 'images/5.png'},
    {name: '6', img: 'images/6.png'},
    {name: '6', img: 'images/6.png'}
]


const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('.score')
const playAgain = document.querySelector('button')
const cardsWon = []
let cardsChosen =[]
let cardsChosenId = []




function init (){
const cardArray = [
    {name: '1', img: 'images/1.png'},
    {name: '1', img: 'images/1.png'},
    {name: '2', img: 'images/2.png'},
    {name: '2', img: 'images/2.png'},
    {name: '3', img: 'images/3.png'},
    {name: '3', img: 'images/3.png'},
    {name: '4', img: 'images/4.png'},
    {name: '4', img: 'images/4.png'},
    {name: '5', img: 'images/5.png'},
    {name: '5', img: 'images/5.png'},
    {name: '6', img: 'images/6.png'},
    {name: '6', img: 'images/6.png'}
]


render()


}


function renderBoard() {
cardArray.sort(function(){return 0.5 - Math.random()});
for(let i =0; i<cardArray.length; i++){
    const card = document.createElement('img')
    card.setAttribute('src', 'images/StartPhoto.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', showCard)
    grid.append(card)


}
}


function startGame (){
const startBtn = document.querySelector('.start');
startBtn.addEventListener('click', function(){
const text = document.querySelectorAll('div h3');
    for(var i=0; i<text.length; i++) {
    text[i].parentNode.removeChild(text[i]);
    }
    const button = document.querySelector('.start')
    button.remove()
    timer()
   })
   
}

function timer() {
const timeH = document.querySelector('.timer')
let timeSecond = 5;
timeH.innerHTML = `Seconds Left: ${timeSecond}`
const countDown = setInterval(()=> {
    timeSecond--;
    timeH.innerHTML = `Seconds Left: ${timeSecond}`;
if(timeSecond <= 0 || timeSecond < 1){
    resultDisplay.textContent = "You Lost!"
    playAgain.style.visibility ='visible'
    clearInterval(countDown);
}
   if(cardsWon.length === cardArray.length/2) {
    clearInterval(countDown);
    playAgain.style.visibility ='visible'
}
return
},1000)
}



function checkForMatch () {
let cards = document.querySelectorAll('img')
const firstChoice = cardsChosenId[0]
const secondChoice = cardsChosenId[1]
if (cardsChosen[0]=== cardsChosen[1]){
    cards[firstChoice].setAttribute('src', `images/${cardArray[firstChoice].name}.png`)
    cards[firstChoice].removeEventListener("click", showCard)

    cards[secondChoice].setAttribute('src', `images/${cardArray[secondChoice].name}.png`)
    cards[secondChoice].removeEventListener("click", showCard)
    cardsWon.push(cardsChosen)
    }else {
        cards[firstChoice].setAttribute('src', 'images/coverPhoto.png')
        cards[secondChoice].setAttribute('src', 'images/coverPhoto.png')
     }
     cardsChosen = []
     cardsChosenId = []
     resultDisplay.textContent = `Score ${cardsWon.length}`
     if(cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'CONGRATS YOU WON'
      }
}





function showCard (){
let cardId = this.getAttribute('data-id')
cardsChosen.push(cardArray[cardId].name)
cardsChosenId.push(cardId)
this.setAttribute('src', cardArray[cardId].img)
if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
}
}



function render() {
    renderBoard()
    startGame ()
    checkForMatch ()
    
}





playAgain.addEventListener('click', init)
init()