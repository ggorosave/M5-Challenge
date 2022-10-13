// Variables
var currentDay = $("#currentDay");
var nineBlock = $("#first-block");
var tenBlock = $("#second-block");
var elevenBlock = $("#third-block");
var twelveBlock = $("#fourth-block");
var oneBlock = $("#fifth-block");
var twoBlock = $("#sixth-block");
var threeBlock = $("#seventh-block");
var fourBlock = $("#eighth-block");
var fiveBlock = $("#ninth-block");

// Displays the current date in the jumbotron
currentDay.text(moment().format("MMMM Do, YYYY"));

// Changes current time to a number and adds twelve if time is after noon
var currentTime = 0;

function getCurrentTime() {
    
    let now = moment(). format("h a");
    
    // Changes current hour from strong to number 
    let hour = parseInt(moment(). format("h"), 10);

    // Checks if time is "am" or  12pm and returns current time as a number
    if (now.includes("am") || hour === 12) {
        currentTime = hour;
        return currentTime;
    }

    // Checks if time is "pm" and not 12pm and returns current time plus 12
    if (now.includes("pm") && hour !== 12) {
        currentTime = hour + 12;
        return currentTime;
    }
    
}

// Compares the time of each block to the current time and changes the color of the textbox 
function changeBlockColor() {
    let timeBlockArray = [nineBlock, tenBlock, elevenBlock, twelveBlock, oneBlock, twoBlock, threeBlock, fourBlock, fiveBlock];

    for (i = 0; i < timeBlockArray.length; i++) {
        
        // Calls the getCuurentTime function to return the current time as a number in 24hr format
        getCurrentTime();

        // Checks if the block time is in the past
        if (timeBlockArray[i].data("time") < currentTime) {
            timeBlockArray[i].addClass("past");
        }

        // Checks if the block time is now
        if (timeBlockArray[i].data("time") === currentTime) {
            timeBlockArray[i].addClass("present");
        }

        // Checks if the block time is in the future
        if (timeBlockArray[i].data("time") > currentTime) {
            timeBlockArray[i].addClass("future");
        }

    }
}

// Runs the changeBlockColor function every second
setInterval(changeBlockColor, 1000);