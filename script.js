//main numbers for gold
let goldRaw = 0;
let gold = 0;
let goldPerClick = 1;
let goldPerClickDisplay = 1;
let seconds = 0;
let goldPerSecond = 0;
let goldPerSecondDisplay
let goldhtml = "<h1> " + gold + " </h1>"

//prices of stuff
let clickerPrice = 10;
let dwarfPrice = 100;
let dwarfPriceDisplay = 100;
let goldFromDwarves = 0.5;
let dwarvesOwned = 0; 

//other stuff
let randomNumber = 0;
let randomNumberFloor = 0;

function removeDecimal() {
	gold = Math.trunc(goldRaw)
	goldPerClickDisplay = Math.trunc(goldPerClick)
	goldPerSecondDisplay = Math.trunc(goldPerSecond)
	clickerPriceDisplay = Math.trunc(clickerPrice)
	dwarfPriceDisplay = Math.trunc(dwarfPrice)
}

function refresh() {
	console.log(gold);
	removeDecimal();
    document.getElementById("gold-display").innerHTML = "<h1>Gold: " + gold + "</h1>"
	document.getElementById("gold-per-second").innerHTML = "<h2>Gold Per Second: " + goldPerSecondDisplay + "</h1>"
	document.getElementById("gold-per-click").innerHTML = "<h2>Gold Per Click: " + goldPerClickDisplay + "</h1>"
	//dwarves
	document.getElementById("dwarves-display").innerHTML = "<h3>Dwarves | Cost: " + dwarfPriceDisplay + " | Gold from dwarf: " + goldFromDwarves + "/s</h3>"
	document.getElementById("dwarves-lower-display").innerHTML = "<h3>" + dwarvesOwned + " dwarves owned producing " + goldFromDwarves + " per second</h3>" 
}

function clickForGold() {
	goldRaw = goldRaw + goldPerClick;
  	removeDecimal()
 	console.log(gold)
}

function getClicker() {
	if (gold >= clickerPrice) {
		goldPerClick = goldPerClick * 1.2;
    	goldRaw = goldRaw - clickerPrice;
		clickerPrice = clickerPrice * 1.2;
  	} else {
  		console.log("Not enough gold!")
  }
}

function chance() {
	randomNumber = Math.random(0, 3)
	randomNumberFloor = Math.floor(randomNumber)
	console.log(randomNumberFloor)
	if (randomNumber == 1) {
		goldRaw = goldRaw * 1.1;
	}
}

function getDwarves() {
	if (gold >= dwarfPrice) {
		goldPerSecond = goldPerSecond + goldFromDwarves;
    	goldRaw = goldRaw - dwarfPrice;
    	dwarfPrice = dwarfPrice * 1.2;
		goldFromDwarves * 1.5;
		dwarvesOwned = dwarvesOwned + 1;
  	} else {
  		console.log("Not enough gold!")
  }
}

function incrementSeconds() {
	refresh();
}

function incrementSeconds2() {
	goldRaw = goldRaw + goldPerSecond;
}

var cancel = setInterval(incrementSeconds, 100);
var cancel2 = setInterval(incrementSeconds2, 1000);