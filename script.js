  
    ///card options array
    const cardArray = [
        {name: 'rem2', img: 'images/rembrandt2.png'},
        {name: 'rem2', img: 'images/rembrandt2.png'},
        {name: 'rem1', img: 'images/rembrandt1.png'},
        {name: 'rem1', img: 'images/rembrandt1.png'},
        {name: 'pic1', img: 'images/picasso1.png'},
        {name: 'pic1', img: 'images/picasso1.png'},
        {name: 'pic3', img: 'images/picasso3.png'},
        {name: 'pic3', img: 'images/picasso3.png'},
        {name: 'mon2', img: 'images/mondrian2.png'},
        {name: 'mon2', img: 'images/mondrian2.png'},
        {name: 'mon1', img: 'images/mondrian1.png'},
        {name: 'mon1', img: 'images/mondrian1.png'}
    ]


////create board
const grid = document.querySelector('.grid')
///create result display
const resultDisplay = document.querySelector('.score')
//collects the cards chosen
let cardsChosen =[]
///collects the id chosen
let cardsChosenId = []

const cardsWon = []


function createBoard() {
    cardArray.sort(function(){return 0.5 - Math.random()});

    ///goes through each card array
    for(let i =0; i<cardArray.length; i++){
        //creates image element
        const card = document.createElement('img')
        //sets each card cover photo to coverPhoto
        card.setAttribute('src', 'images/coverPhoto.png')
        //creates a data id for each card
        card.setAttribute('data-id', i)
        //each card gets event listender that flips card
        card.addEventListener('click', flipCard)
        // console.log('this is the card event listener' ,card)
        //each card gets appended to the grid
        grid.append(card)
    
    }
}

///check for match
function openPopup() {
    const button = document.querySelector('.popup')
    button.classList.add('open-popup')
}

function checkForMatch () {
   let cards = document.querySelectorAll('img')
    const firstChoice = cardsChosenId[0]
    const secondChoice = cardsChosenId[1]
    if (cardsChosen[0]=== cardsChosen[1]){
        
        
     
        cards[firstChoice].setAttribute('src', 'images/coverPhoto.png')
        cards[secondChoice].removeEventListener("click", flipCard)

        cards[firstChoice].setAttribute('src', 'images/coverPhoto.png')
        cards[secondChoice].removeEventListener("click", flipCard)
        cardsWon.push(cardsChosen)
        // console.log("this is cards won" , cardsWon)

        }else {
            cards[firstChoice].setAttribute('src', 'images/coverPhoto.png')
            cards[secondChoice].setAttribute('src', 'images/coverPhoto.png')
            alert('sorry,try again')
         }
         cardsChosen = []
         cardsChosenId = []
         resultDisplay.textContent = cardsWon.length
         if(cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'CONGRATS YOU WON'
        }

    }




///flipcard
function flipCard (){
    ///gets data id name
    let cardId = this.getAttribute('data-id')
    //creates an array with the card id name when clicked on
    cardsChosen.push(cardArray[cardId].name)
    console.log('this is cardsChosen', cardsChosen)
    //pushes card id into id array
    cardsChosenId.push(cardId)
    console.log('this is cardsChosenId', cardsChosenId)
     //sets the attributes of the card chosen to the card id
    this.setAttribute('src', cardArray[cardId].img)
    ///checks for match when two cards are chosen
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
    timer()

}

createBoard()

function startGame (){
    const startBtn = document.querySelector('button');
    startBtn.addEventListener('click', function(){
        const text = document.querySelectorAll('div h3');
        for(var i=0; i<text.length; i++) {
            text[i].parentNode.removeChild(text[i]);
        }
        const button = document.querySelector('button')
        button.remove()
       })
}

function keepScore() {

}

function timer() {
    const timeH = document.getElementById('timer')
    let timeSecond = 6;
    timeH.innerHTML = `Seconds Left: ${timeSecond}`
    const countDown = setInterval(()=> {
        timeSecond--;
        timeH.innerHTML = `Seconds Left: ${timeSecond}`;
    if(timeSecond <= 0 || timeSecond < 1){
        clearInterval(countDown);
    }
    },1000)
    }

   
startGame ()

openPopup()