let goldRaw = 0;
let gold = 0;
let goldPerClick = 1;
let clickerPrice = 10;

function removeDecimal() {
	gold = Math.trunc(goldRaw)
}

function refresh() {
	
}

function clickForGold() {
	goldRaw = goldRaw + goldPerClick;
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
