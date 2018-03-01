/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score, roundScore, activePlayer;
score=[0, 0];
roundScore = 0;
activePlayer = 0;

//we also need a dice to display or indisplay after the players rolls it
document.querySelector(".dice").style.display = "none";

document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";



document.querySelector(".btn-roll").addEventListener("click", function(){
  //we need a random number
  var dice = Math.floor(Math.random() * 6) +1;

  // now we need the result
  var diceDom = document.querySelector(".dice");
  diceDom.style.display = 'block';
  diceDom.src = "dice-" + dice + ".png";


  //update the round score IF the rolled number is not 1
  if(dice !== 1){
    //add score
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;

  }else{
    //next player

    nextPlayer();

  }
});

document.querySelector(".btn-hold").addEventListener("click", function(){
  // add current score to current player's total score
  score[activePlayer] += roundScore;

  // update the UI
  document.getElementById("score-" + activePlayer).innerHTML = score[activePlayer];


  // check if player won the GAME
  nextPlayer();
});

function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
  roundScore = 0;
    document.getElementById('current-0').textContent ="0";
    document.getElementById('current-1').textContent ="0";
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
};
