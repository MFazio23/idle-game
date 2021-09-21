let goldRaw = 0;
let gold = 0;
let goldPerClick = 1;
let clickerPrice = 10;
let seconds = 0;
let goldPerSecond = 0;
let dwarfPrice = 100;
function removeDecimal() {
	gold = Math.trunc(goldRaw)
}

function refresh() {
	
}

function clickForGold() {
	goldRaw = goldRaw + goldPerSecond;
  	removeDecimal()
 	console.log(gold)
}

function getClicker() {
	if (gold >= clickerPrice) {
		goldPerClick = goldPerClick * 1.5;
    	goldRaw = goldRaw - 10;
    	clickerPrice = clickerPrice * 1.5;
  	} else {
  		console.log("Not enough gold!")
  }
}

function getDwarves() {
	if (gold >= dwarfPrice) {
		goldPerSecond = goldPerSecond + 10;
    	goldRaw = goldRaw - 100;
    	clickerPrice = clickerPrice * 1.5;
  	} else {
  		console.log("Not enough gold!")
  }
}

function incrementSeconds() {
    goldRaw = goldRaw + goldPerSecond;
    console.log(goldPerSecond)
}

var cancel = setInterval(incrementSeconds, 1000);
