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
activePlayer = 1;



//we also need a dice to display or indisplay after the players rolls it
document.querySelector(".dice").style.display = 'none';
document.querySelector(".btn-roll").addEventListener("click", function(){
  //we need a random number
  var dice = Math.floor(Math.random() * 6) +1;

  // now we need the result
  var diceDom = document.querySelector(".dice");
  diceDom.style.display = 'block';
  diceDom.src = "dice-" + dice + ".png";


  //update the round score IF the rolled number is not 1



});





// document.querySelector("#current-" + activePlayer).innerHTML = dice;
// OR
// document.querySelector("#current-" + activePlayer).textContent = dice;

// var x = document.querySelector("#score-0").textContent;
// console.log(x);
