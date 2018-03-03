
var score, roundScore, activePlayer, gamePlaying, lastDice;
init();

document.querySelector(".btn-roll").addEventListener("click", function(){

  if(gamePlaying){
    //we need a random number
    var dice1 = Math.floor(Math.random() * 6) +1;
    var dice2 = Math.floor(Math.random() * 6) +1;


    // now we need the result
    document.getElementById('dice-1').style.display="block";
    document.getElementById('dice-2').style.display="block";
    document.getElementById('dice-1').src = "dice-" + dice1 + ".png";
    document.getElementById('dice-2').src = "dice-" + dice2 + ".png";
    if(dice1 !== 1 && dice2 !== 1){
      //add score
      roundScore += dice1 + dice2;
      document.querySelector("#current-" + activePlayer).textContent = roundScore;

    }else{
      //next player
      nextPlayer();
    }
  }

});

document.querySelector(".btn-hold").addEventListener("click", function(){
    if(gamePlaying){
        // add current score to current player's total score
        score[activePlayer] += roundScore;
        // update the UI
        document.getElementById("score-" + activePlayer).innerHTML = score[activePlayer];
        var finalScore = document.querySelector(".final-score").value;
        var winningScore;
        if(finalScore){
          winningScore = finalScore;

        }else {
          winningScore = 100;
        }

        if(score[activePlayer] >= winningScore){
          document.querySelector("#name-" + activePlayer).textContent = "Winner!";
          document.getElementById('dice-1').style.display="none";
          document.getElementById('dice-2').style.display="none";
          document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
          document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
          gamePlaying = false;
        }else{
          //next player
          nextPlayer();
        }
    }
});

function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
  roundScore = 0;
    document.getElementById('current-0').textContent ="0";
    document.getElementById('current-1').textContent ="0";
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.getElementById('dice-1').style.display="none";
    document.getElementById('dice-2').style.display="none";
  };

document.querySelector(".btn-new").addEventListener("click", init);

function init(){
  gamePlaying = true;
    score=[0, 0];
    roundScore = 0;
    activePlayer = 0;
    //we also need a dice to display or indisplay after the players rolls it
    document.getElementById('dice-1').style.display="none";
    document.getElementById('dice-2').style.display="none";
    document.querySelector("#name-0").textContent = "PLAYER 1";
    document.querySelector("#name-1").textContent = "PLAYER 2";
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");



    document.getElementById('score-0').textContent = "0";
    document.getElementById('score-1').textContent = "0";
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";


}
