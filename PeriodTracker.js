let prompt = require('prompt-sync')();


function getCycleLength() {
    let cycleLength = parseInt(prompt("Enter your menstrual cycle length (in days):"));
    while (isNaN(cycleLength) || cycleLength < 20 || cycleLength > 45) {
        cycleLength = parseInt(prompt("Invalid input! Please enter a number between 20 and 45:"));
    }
    return cycleLength;
}
function getPeriodLength() {
    let  periodLength = parseInt(prompt("Enter your menstrual period length(in days):"));
    while (isNaN(periodLength) || periodLength < 2 || periodLength > 10){
        periodLength = parseInt(prompt("Invalid input! please enter a number between 2 and 10:"));
    }
    return periodLength;
}

function getLastPeriod() {
    let lastPeriod = new Date(prompt("Enter the date of your last period (YYYY-MM-DD):"));
    while (isNaN(lastPeriod.getTime())) {
        lastPeriod = new Date(prompt("Invalid input! Please enter a valid date (YYYY-MM-DD):"));
    }
    return lastPeriod;
}


function calculateNextPeriod() {
    const cycleLength = getCycleLength();
    const periodLength = getPeriodLength();
    const lastPeriod = getLastPeriod();
    const nextPeriod = new Date(lastPeriod.getTime() + periodLength+ (cycleLength * 24 * 60 * 60 * 1000));
    console.log("Your next period start date is " + nextPeriod.toLocaleDateString());
}
calculateNextPeriod(); 