
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.

// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// BONUS: 
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:

//    con difficoltà 0 => tra 1 e 100
//    con difficoltà 1 => tra 1 e 80
//    con difficoltà 2 => tra 1 e 50

var score = document.getElementById('score');
var numMax = 100;
var userValue = 84;
var difficultySelect = document.getElementById('difficulty');

//DIFFICULTY 
difficultySelect.addEventListener('change', function(){
  var difficulty = document.getElementById('difficulty').value;

switch (difficulty) {
  case 0:
    numMax = 100;
    userValue = 84;
  break;

  case 1:
    numMax = 80;
    userValue = 64;
  break;

  case 2:
    numMax = 50;
    userValue = 34;
  break;
}
});

//FUNCTION BOT
function numBot(){
  numMines = [];

//RANDOM 16 NUMBER (MINES)
  while (numMines.length < 16) {
    var rnd = Math.floor(Math.random() * numMax) + 1;
    if (!numMines.includes(rnd)) {
      numMines.push(rnd);
    }
  }
  console.log(numMines);
}

//FUNCTION PLAYER INPUTS + ALLERTS
function numPlayer(){


  numUser = [];
  while (numUser.length < userValue) {
    var numInsert = parseInt(prompt('Choose a number between 1 and ' + numMax + '!'));
    if (numUser.includes(numInsert)) {
      alert('WARNING! Double number, retry'); //doublenumber
      continue
    }
    numUser.push(numInsert);
    if (numMines.includes(numInsert)) {
      score.innerHTML = 'You loose, your score is: ' + (numUser.length - 1) + ' points';
      break;
    }else if (numUser.length == userValue) {
      score.innerHTML = 'YOU WIN!';
    } // elseif
  }//while
}//numPlayer

//GAME FUNCTION
function minefield(){
  numBot();
  numPlayer();
}

//BUTTON CLICK
var playBtn = document.getElementById('play');
playBtn.addEventListener('click', function(){

  minefield();
});
