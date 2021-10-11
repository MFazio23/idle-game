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
//dwarves
let dwarfPrice = 100;
let dwarfPriceDisplay = 100;
let goldFromDwarves = 2;
let dwarvesOwned = 0;
//bulldozers
let bulldozerPrice = 1100;
let bulldozerPriceDisplay = 1100;
let goldFromBulldozer = 15;
let bulldozersOwned = 0;

//other stuff
let randomNumber = 0;
let cancel = setInterval(incrementSeconds, 100);
let cancel2 = setInterval(incrementSeconds2, 1000);
let timeForQuote = 1;

//turning decimals into whole numbers
function removeDecimal() {
	gold = Math.trunc(goldRaw)
	goldPerClickDisplay = Math.trunc(goldPerClick)
	goldPerSecondDisplay = Math.trunc(goldPerSecond)
	clickerPriceDisplay = Math.trunc(clickerPrice)
	dwarfPriceDisplay = Math.trunc(dwarfPrice)
	clickerPriceDisplay = Math.trunc(clickerPrice)
	bulldozerPriceDisplay = Math.trunc(bulldozerPrice)
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
	
	//bulldozers
	document.getElementById("bulldozer-display").innerHTML = "<h3>Bulldozer | Cost: " + bulldozerPriceDisplay + " | Gold from dwarf: " + goldFromBulldozer + "/s</h3>"
	document.getElementById("bulldozer-lower-display").innerHTML = "<h3>" + bulldozersOwned + " bulldozers owned.</h3>" 
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

function getBulldozer() {
	if (gold >= dwarfPrice) {
		goldPerSecond = goldPerSecond + goldFromBulldozer;
		goldRaw = goldRaw - bulldozerPrice;
		bulldozerPrice = bulldozerPrice * 1.2;
		goldFromBulldozer = goldFromBulldozer * 1.2;
	} else {
		alert("You don't have enough gold!")
	}
}

function bulldozerUpgrade() {
	if (goldRaw >= bulldozerPrice * 2) {
		goldFromBulldozer * 2;
		getBulldozer();
		goldRaw = goldRaw + bulldozerPrice;
	} else {
		alert("You don't have enough gold!")
	}
}

function incrementSeconds() {
	refresh();
}

function incrementSeconds2() {
	goldRaw = goldRaw + goldPerSecond;
	timeForQuote = timeForQuote + 1;
	if (timeForQuote == 5) {
		pickNewQuote();
		timeForQuote = 0;
	} else {
		console.log("No quote needed")
	}
}

let randomQuoteNumber = 0;
function pickNewQuote() {
	randomQuoteNumber = Math.floor(Math.random() * 4)
	if (randomQuoteNumber == 0) {
		document.getElementById("quotes").innerHTML = "<h3>My Friend Peppa Pig wins GOTY, narrowly beating Far Cry: An Evil Dictator and God of War: Revenge of the Prairie Dogs!</h3>";
	} if (randomQuoteNumber == 1) {
		document.getElementById("quotes").innerHTML = "<h3>Dunkin Donuts shamed by the public for not having donuts, just cheap coffee and breakfast sandwiches.</h3>"
	} if (randomQuoteNumber == 2) {
		document.getElementById("quotes").innerHTML = "<h3>“Society has reverted back several hundred years! Instead of money, we now just used gold as our currency! It’s a recipe for disaster!” says controversial intellectual.</h3>"
	} if (randomQuoteNumber == 3) {
		document.getElementById("quotes").innerHTML = "<h3>Indie games now more popular than triple-a games, making EA and Ubisoft niche companies that make games now only bought by people that wear flannel and listen to Bon Iver.</h3>" 
	} if (randomQuoteNumber == 4) {
		document.getElementById("quotes").innerHTML = "<h3>Golden cereal and protein shakes, now sold at a gold depot near you! Part of a complete breakfast!</h3>" 
	}
}