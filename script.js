let gold = 0;
let goldPerClick = 1;

function clickForGold() {
	gold = gold + goldPerClick;
  console.log(gold)
}

function getClicker() {
	if (gold > 10) {
		goldPerClick = goldPerClick * 1.5;
    gold = gold - 10;
  } if (gold < 10) {
  	console.log("Not enough gold!")
  }
}

function getDwarves() {
	dwarves = 1;
  goldFromDwarves * 1.25
}
