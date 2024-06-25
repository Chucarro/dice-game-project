
var randomnum = Math.floor(Math.random()* 6) + 1; 
var randomnum2 = Math.floor(Math.random()* 6) + 1;

var randomDiceImg = "dice" + randomnum + ".png";
var randomImgSrc = "images/" + randomDiceImg;
var randomImgSrc2 = "images/dice" + randomnum2 + ".png";

var dice1 = document.querySelectorAll(".player-dice-img")[0];
var dice2 = document.querySelectorAll(".player-dice-img")[1];

dice1.setAttribute("src", randomImgSrc);
dice2.setAttribute("src",randomImgSrc2);

    if (randomnum > randomnum2) {
        document.querySelector(".title").innerHTML = "🏆Player 1 Wins!!";
    }
    else if (randomnum2 > randomnum) {
        document.querySelector(".title").innerHTML = "Player 2 Wins!!🏆";
    } 
    else {
        document.querySelector(".title").innerHTML = "Draw!";
    }

