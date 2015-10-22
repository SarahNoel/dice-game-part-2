var pScorer = 0;
var cScorer = 0;

//rolls dice for given player and amount of dice specified
function roll(playerArr, numDice){
  playerArr = [];
  var die = 0;
  for (var i = 0; i < numDice; i++) {
    die = Math.ceil(Math.random()*6);
    playerArr.push(die);
  }
  return playerArr;
}

//adds the score of the dice rolled
function sum(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    count += array[i];
  }
  return count;
}

//checks dice to see if they contains 3 given numbers
function straight(array, num1, num2, num3) {
  for (var i = 0; i < array.length; i++) {
    if (array[0] === num1 || array[1] === num1 || array[2] === num1 ){
      if(array[0] === num2 || array[1] === num2 || array[2] === num2 ){
        if(array[0] === num3 || array[1] === num3 || array[2] === num3 ){
          return true;
        }
      }
    }
  }
}

//rules to find winner

function winCheck(player1, computer, pScorer, cScorer){
  compResults.innerHTML = "The computer rolled " + computer;
  playerResults.innerHTML = "You rolled " + player1;
  console.log("You rolled "+ player1);
  if (straight(player1, 4, 5, 6)){
    results.innerHTML = "You win!";
    pScorer ++;

  } else if (straight(computer, 4, 5, 6)){
    results.innerHTML = "The computer wins.";
    cScorer ++;

  } else if (straight(player1, 1, 2, 3)) {
    results.innerHTML = "The computer wins.";
    cScorer ++;

  } else if (straight(computer, 1, 2, 3)) {
    results.innerHTML = "You win!";
    pScorer ++;


  } else if (sum(player1) > sum(computer)){
    results.innerHTML = "You win!";
    pScorer ++;

  } else if (sum(computer) > sum(player1)){
    results.innerHTML = "The computer wins.";
    cScorer ++;

  } else {
    results.innerHTML = "It's a tie!";
  }
  return [pScorer, cScorer];
}


function displayDice(player1, computer) {
  var diceFace = [0, '\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];
  pDice1.innerHTML = diceFace[player1[0]];
  pDice2.innerHTML = diceFace[player1[1]];
  pDice3.innerHTML = diceFace[player1[2]];
  cDice1.innerHTML = diceFace[computer[0]];
  cDice2.innerHTML = diceFace[computer[1]];
  cDice3.innerHTML = diceFace[computer[2]];
}

// define DOM buttons
var rollBtn = document.getElementById('roll');
var playerBox = document.getElementById('player-hand');
var compBox = document.getElementById('computer-hand');
var pDice1 = document.getElementById('p-dice1');
var pDice2 = document.getElementById('p-dice2');
var pDice3 = document.getElementById('p-dice3');

var cDice1 = document.getElementById('c-dice1');
var cDice2 = document.getElementById('c-dice2');
var cDice3 = document.getElementById('c-dice3');

var results = document.getElementById('results');
var compResults = document.getElementById('comp-results');
var playerResults = document.getElementById('player-results');

var playerScore = document.getElementById('p-score');
var compScore = document.getElementById('c-score');
var resetBtn= document.getElementById('reset');




rollBtn.addEventListener('click', function(){
  var player1 = roll(player1, 3);
  var computer = roll(computer, 3);
  displayDice(player1, computer);
  var scoreboard= winCheck(player1, computer, pScorer, cScorer);
  playerScore.innerHTML = scoreboard[0];
  compScore.innerHTML = scoreboard[1];
  pScorer = scoreboard[0];
  cScorer = scoreboard[1];
});


resetBtn.addEventListener('click', function(){
  pScorer = 0;
  cScorer = 0;
  playerScore.innerHTML = 0;
  compScore.innerHTML = 0;
  pDice1.innerHTML = '';
  pDice2.innerHTML = '';
  pDice3.innerHTML = '';
  cDice1.innerHTML = '';
  cDice2.innerHTML = '';
  cDice3.innerHTML = '';
  results.innerHTML = '';
  compResults.innerHTML = '';
  playerResults.innerHTML = '';

});









