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

// An array of all the time blocks
let timeBlockArray = [
    nineBlock, 
    tenBlock, 
    elevenBlock, 
    twelveBlock, 
    oneBlock, 
    twoBlock, 
    threeBlock, 
    fourBlock, 
    fiveBlock
];

// Buttons
var saveNine = $("#first-button");
var saveTen = $("#second-button");
var saveEleven = $("#third-button");
var saveTwelve = $("#fourth-button");
var saveOne = $("#fifth-button");
var saveTwo = $("#sixth-button");
var saveThree = $("#seventh-button");
var saveFour = $("#eighth-button");
var saveFive = $("#ninth-button");


// Displays the current date in the jumbotron
currentDay.text(moment().format("MMMM Do, YYYY"));


// Compares the time of each block to the current time and changes the color of the textbox 
function changeBlockColor() {
    
    
    var currentTime = 0;
    
    // Changes current time to a number and adds twelve if time is after noon
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

// Runs the changeBlockColor function every milisecond
setInterval(changeBlockColor, 1);

// Event Listeners

// Takes a string and a time block and saves value to local storage  (MOVE UP)
function saveEvent(timeString, someBlock) {

    let newEvent = {
        event: someBlock.val()
    }

    localStorage.setItem(timeString, JSON.stringify(newEvent));
}

saveNine.on("click", function() {
    event.preventDefault();

    saveEvent("nine", nineBlock);
});

saveTen.on("click", function() {
    
    console.log("save 10");
    saveEvent("ten", tenBlock);
})

saveEleven.on("click", function() {
    
    console.log("save 11");
    saveEvent("eleven", elevenBlock);
})

saveTwelve.on("click", function() {
    
    console.log("save 12");
    saveEvent("twelve", twelveBlock);
})

saveOne.on("click", function() {
    
    console.log("save 1");
    saveEvent("one", oneBlock);
})

saveTwo.on("click", function() {
    
    console.log("save 2");
    saveEvent("two", twoBlock);
})

saveThree.on("click", function() {
    
    console.log("save 3");
    saveEvent("three", threeBlock);
})

saveFour.on("click", function() {
    
    console.log("save 4");
    saveEvent("four", fourBlock);
})

saveFive.on("click", function() {
    
    console.log("save 5");
    saveEvent("five", fiveBlock);
})

// Loads saved events on to the screen
function loadSchedule(storageString, someBlock) {
    
    // make an array of strings that correspoind to the event names
    // Loops through all timeblocks and loads saved events
    // for (let i = 0; i < timeBlockArray.length; i++) {
    //     let newEvent = JSON.parse(localStorage.getItem(storageString));

    //     someBlock.text(newEvent.event);

    let newEvent = JSON.parse(localStorage.getItem("nine"));
    nineBlock.text(newEvent.event);
}

loadSchedule();