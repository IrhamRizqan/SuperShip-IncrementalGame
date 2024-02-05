let money = document.querySelector('.moneyAmount');
let parsedMoney = parseFloat(money.innerHTML);

let clickUpgradeCost = document.querySelector('.click-upgrade-cost');
let parsedUpgradeCost = parseFloat(clickUpgradeCost.innerHTML);
let clickLevel = document.querySelector('.click-level');
let clickIncrease = document.querySelector('.click-increase');
let parsedClickIncrease = parseFloat(clickIncrease.innerHTML);

let moneyPerClick = 1;

function addMoney() {
    money.innerHTML = Math.round(parsedMoney += moneyPerClick);
}

function buyClickUpgrade() {
    if (parsedMoney >= parsedUpgradeCost) {
        money.innerHTML = Math.round(parsedMoney -= parsedUpgradeCost);

        clickLevel.innerHTML ++;

        parsedClickIncrease = (parsedClickIncrease * 1.03).toFixed(2);
        clickIncrease.innerHTML = parsedClickIncrease;
        moneyPerClick += parsedClickIncrease;

        parsedUpgradeCost *= 1.18;
        clickUpgradeCost.innerHTML = Math.round(parsedUpgradeCost);
    }
}