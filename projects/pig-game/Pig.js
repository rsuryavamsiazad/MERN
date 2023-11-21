//collecting the webpage elements
let current0 = document.getElementById('current--0')
let current1 = document.getElementById('current--1')
let diceBtn = document.getElementById('dice--btn')
let dice = document.getElementById('img')
let score0 = document.getElementById('score--0')
let score1 = document.getElementById('score--1')
let holdbtn = document.getElementById('hold-btn')
let newBtn = document.getElementById('new')
let section0 = document.querySelector('.player0')
let section1 = document.querySelector('.player1')

//declaring custom variables
let current;
let currentplayer;
let scores;

//page on load function
function onStart() {
    //intializing the variables
    current = 0
    currentplayer = 0
    scores = [0, 0]

    //reseting the content of the webpage on every start
    current0.textContent = 0;
    current1.innerText = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    document.getElementById(`name-0`).innerText = 'Player 1'
    document.getElementById(`name-1`).innerText = 'Player 2'
    dice.classList.add('hidden')
    section0.classList.add('active')
    diceBtn.classList.remove('hidden')
    holdbtn.classList.remove('hidden')
    section1.classList.remove('active', 'winner')
    section0.classList.remove('winner')
}

//function for switching players
function switchUp() {
    current = 0;
    document.getElementById(`current--${currentplayer}`).textContent = current;
    currentplayer = currentplayer === 0 ? 1 : 0;
    section0.classList.toggle('active')
    section1.classList.toggle('active')

}
//functions to roll dice button
diceBtn.addEventListener('click', function () {
    dice.classList.remove('hidden')
    //creating a random number
    let rand = Math.trunc((Math.random() * 6) + 1)
    dice.src = `images/inverted-dice-${rand}.png`;
    if (rand != 1) {
        current += rand;
        document.getElementById(`current--${currentplayer}`).textContent = current;
    } else {
        switchUp()
    }
})

//adding events for the hold button
holdbtn.addEventListener('click', function () {
    scores[currentplayer] += current;
    document.getElementById(`score--${currentplayer}`).innerText = scores[currentplayer];

    if (scores[currentplayer] >= 50) {
        diceBtn.classList.add('hidden')
        holdbtn.classList.add('hidden')
        dice.classList.add('hidden')
        document.getElementById(`name-${currentplayer}`).innerText = 'Winner..!'
        document.querySelector(`.player${currentplayer}`).classList.add('winner')
    } else {
        switchUp()
    }
})

//function for clicking the new game button
newBtn.addEventListener('click', onStart)
