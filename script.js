//main numbers for gold
let goldRaw = 0;
let gold = 0;
let goldPerClick = 1;
let goldPerClickDisplay = 1;
let goldPerSecondFraction = 0;
let seconds = 0;
let goldPerSecond = 0;
let goldPerSecondDisplay
let goldhtml = "<h1> " + gold + " </h1>"

//prices of stuff
let clickerPrice = 10;
let clickerPriceDisplay = 10;
let clickersOwned = 0;
let dwarfPrice = 100;
let dwarfPriceDisplay = 100;
let goldFromDwarves = 0.5;
let dwarvesOwned = 0;

//other stuff
let randomNumber = 0;

//turning decimals into whole numbers
function removeDecimal() {
	gold = Math.trunc(goldRaw)
	goldPerClickDisplay = Math.trunc(goldPerClick)
	goldPerSecondDisplay = Math.trunc(goldPerSecond)
	clickerPriceDisplay = Math.trunc(clickerPrice)
	dwarfPriceDisplay = Math.trunc(dwarfPrice)
	clickerPriceDisplay = Math.trunc(clickerPrice)
}

function refresh() {
	//console.log(gold);
	removeDecimal();
    document.getElementById("gold-display").innerHTML = "<h1>Gold: " + gold + "</h1>"
	document.getElementById("gold-per-second").innerHTML = "<h2>Gold Per Second: " + goldPerSecondDisplay + "</h1>"
	document.getElementById("gold-per-click").innerHTML = "<h2>Gold Per Click: " + goldPerClickDisplay + "</h1>"
	//clicker
	document.getElementById("cursor-display").innerHTML = "<h3>Cursor | Cost " + clickerPriceDisplay + " | Gold per click: " + goldPerClickDisplay + "</h3>"
	document.getElementById("cursor-lower-display").innerHTML = "<h3>" + clickersOwned + " cursors owned.</h3>"
	//dwarves
	document.getElementById("dwarves-display").innerHTML = "<h3>Dwarves | Cost: " + dwarfPriceDisplay + " | Gold from dwarf: " + goldFromDwarves + "/s</h3>"
	document.getElementById("dwarves-lower-display").innerHTML = "<h3>" + dwarvesOwned + " dwarves owned.</h3>" 
}

function clickForGold() {
	goldRaw = goldRaw + goldPerClick;
  	removeDecimal()
 	console.log(gold)
}

function getClicker() {
	if (gold >= clickerPrice) {
		goldPerClick = goldPerClick * 1.3;
    	goldRaw = goldRaw - clickerPrice;
		clickerPrice = clickerPrice * 1.5;
		clickersOwned = clickersOwned + 1;
  	} else {
  		alert("Not enough gold!")
  }
}

function upgradeClicker() {
	if (goldRaw == clickerPrice * 2) {
		goldPerSecondFraction = goldPerSecond * 0.10;
		goldPerClick = goldPerClick + goldPerSecondFraction;
	} else {
		alert("You don't have enough gold!")
	}
}

function chance() {
	randomNumber = Math.floor(Math.random() * 3)
	console.log(randomNumber)
	if (randomNumber == 0) {
		goldRaw = goldRaw * 1.1;
	} if (randomNumber == 1) {
		goldRaw = goldRaw * 1.1;
	} if (randomNumber == 2) {
		goldRaw = goldRaw * 0.8;
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
  		console.log("You don't have enough gold!")
  }
}
function dwarfUpgrade() {
	if (goldRaw >= dwarfPrice * 2) {
		goldFromDwarves * 1.10;
	}
	else {
		alert("You don't have enough gold!")
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