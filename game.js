 var randomDice = Math.floor ((Math.random()*6)+1);

 var diceLocation = "img/" + "Dice-" + randomDice + ".png"; // Define the Dice with location 

 var img1 = document.querySelectorAll("img")[0]; //select img attributes

 img1.setAttribute("src", diceLocation);

// for same query for dice 2

var randomDice2 = Math.floor((Math.random()*6)+1);

var diceLocation2 = "img/" + "Dice-" + randomDice2 + ".png"; //define th dice with location


var img2 = document.querySelectorAll("img")[1]; // select the dice location

img2.setAttribute("src", diceLocation2);


//now the header title change


if (randomDice > randomDice2) {
	
	document.querySelector("h1").innerHTML = " &#128681; Player 1 Win !";
}
else if (randomDice < randomDice2) {
	
	document.querySelector("h1").innerHTML = "Player 2 Win ! &#128681; ";
}
else if (randomDice = randomDice2) {

	document.querySelector("h1").innerHTML = "&#128681; Draw! &#128681;";
}
else{
	document.querySelector("h1").innerHTML = "Please Refresh this page"
}