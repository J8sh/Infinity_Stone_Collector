


var wins = 0;
var losses = 0;
var currentScore = 0;

//assigns random value from 1 to 12
var red = Math.floor((Math.random()* 12) + 1);
var blue = Math.floor((Math.random()* 12) + 1);
var yellow = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);

//selects a random number from 19 to 120
var randomNum = Math.floor((Math.random()* 100) + 19);

//updates score
var updateScore = function (){
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('#current').empty();
	$('#current').append(currentScore);
}
//How to restart Game
var restartGame = function(){
	currentScore = 0;
    randomNum = Math.floor((Math.random()* 100) + 19);

	$('#random_number').empty();
	$('#random_number').append(randomNum);

	red = Math.floor((Math.random()* 12) + 1);
    blue = Math.floor((Math.random()* 12) + 1);
    yellow = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
    
    updateScore();
}

//adds wins or losses
var winLoss = function (){
	if (currentScore == randomNum) {
		wins = wins + 1;
		restart();

	}else if(currentScore > randomNum){
		losses = losses + 1;
		restart();

	}else{
		updateScore();
	}
}
$('#random_number').append(randomNum);

$('#current').append(currentScore);

// buttons
$(document).ready(function(){
	$('#red').click(function(){
		currentScore = currentScore + red;
		winLoss();
	})
	$('#blue').click(function(){
		currentScore = currentScore + blue;
		winLoss();
	})
	$('#yellow').click(function(){
		currentScore = currentScore + yellow;
		winLoss();
	})
	$('#green').click(function(){
		currentScore = currentScore + green;
		winLoss();
	})
});
