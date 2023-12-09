let breakIncrementBtn = document.getElementById("break-increment");
let breakDecrementBtn = document.getElementById("break-decrement");
let sessionIncrementBtn = document.getElementById("session-increment");
let sessionDecrementBtn = document.getElementById("session-decrement");
let startStopBtn = document.getElementById("start_stop");
let resetBtn = document.getElementById("reset");

let breakLength = document.getElementById("break-length");
let sessionLenght = document.getElementById("session-length");
let timeLeft = document.getElementById("time-left");

let timer;
let timerStatus = "begin";

// SESSION START/STOP BUTTON
startStopBtn.addEventListener("click", () => {
    if (timerStatus === "begin" || timerStatus === "stopped") {
        
        // start the timer
        console.log("start/stop button clicked");
        timerStatus = "counting";
        timer =  setInterval(() =>  { 
            timeLeft.innerHTML = decrementTime(timeLeft.innerHTML);
        }, 1000); 
    }
    else if (timerStatus === "counting") {
        // stop the timer
        console.log("stop the timer");
        timerStatus = "stopped";
        clearInterval(timer);
    }
})

// RESET BUTTON
resetBtn.addEventListener("click", () => {
    let minuteDisplay = 25;
    let secondDisplay = 0;

    timerStatus = minuteDisplay + ":" + secondDisplay + 0;
    timeLeft.innerHTML = timerStatus;
    
    let sessionD = 25;
    let breakD = 5;

    sessionLenght.innerHTML = sessionD;
    breakLength.innerHTML = breakD;

    console.log("reset button clicked");
    clearInterval(timer);
})

// SESSION LENGTH BUTTONS
//
// Session decrement by clicking minus button "-"
sessionDecrementBtn.addEventListener('click', () => {
    let decrementTime = sessionLenght.innerHTML = decrementMinutes(sessionLenght.innerHTML);
    let decrementSession = timeLeft.innerHTML = decrementSessionMin(timeLeft.innerHTML);
    console.log(decrementTime);
    console.log(decrementSession);
    console.log("It's clicked");
})

// Session increment by clicking plus button "+"
sessionIncrementBtn.addEventListener('click', () => {
    let incrementTime = sessionLenght.innerHTML = incrementMinutes(sessionLenght.innerHTML);
    let incrementSession = timeLeft.innerHTML = incrementSessionMin(timeLeft.innerHTML);
    console.log(incrementTime);
    console.log(incrementSession);
    console.log("Its clicked");
})

// BREAK TIME BUTTONS
//
// Session decrement by clicking minus button "-"
breakDecrementBtn.addEventListener('click', () => {
    let decrementTime = breakLength.innerHTML = decrementBreakTime(breakLength.innerHTML);
    let decrementBreak = timeLeft.innerHTML = decrementBreakMin(timeLeft.innerHTML);
    console.log(decrementTime);
    console.log(decrementBreak);
    console.log("Its clicked");
}) 

// Session increment by clicking plus button "+"
breakIncrementBtn.addEventListener('click', () => {
    let incrementTime = breakLength.innerHTML = incrementBreakTime(breakLength.innerHTML);
    let incrementBreak = timeLeft.innerHTML = incrementBreakMin(timeLeft.innerHTML);
    console.log(incrementTime);
    console.log(incrementBreak);
    console.log("Its clicked");
}) 


// Function for counting down session time and transitioning to break time
function decrementTime(timeString) {
    let timeDisplay = timeString.split(":");
    let minuteDisplay = parseInt(timeDisplay[0]);
    let secondDisplay = parseInt(timeDisplay[1]);

    secondDisplay += -1;

    if (secondDisplay === -1) {
        secondDisplay = 59;
        minuteDisplay -= 1;
    }

    if (secondDisplay <= 9) {
        secondDisplay = "0" + secondDisplay;
    }

    if (minuteDisplay <= 10) {
        minuteDisplay = "0" + minuteDisplay;
    }

    // Transition to break time
    if (minuteDisplay == 0 && secondDisplay == 0) {
        clearInterval(timer); 

        minuteDisplay = 5;
        secondDisplay = 0;

        minuteDisplay = "0" + minuteDisplay;
        secondDisplay = "0" + secondDisplay;
        
        console.log("Break");
    } 

    return minuteDisplay + ":" + secondDisplay;
}


// Function for decrementing session minutes
function decrementMinutes(timeString) {
    let timeDisplay = timeString;
    let timeLeftDisplay = timeString;
    
    timeDisplay--;
    timeLeftDisplay--;

    if (timeDisplay === -1) {
        timeDisplay = 0;
    }

    return timeDisplay;
}

// Function for incrementing session minutes
function incrementMinutes(timeString) {
    let timeDisplay = timeString;

    timeDisplay++;

    return timeDisplay;
}


// BREAK TIME FUNCTIONS
//
// Function for decrementing break time
function decrementBreakTime(timeString) {
    let timeDisplay = timeString;

    timeDisplay--;

    if (timeDisplay === -1) {
        timeDisplay = 0;
    }

    return timeDisplay;
}

// Function for incrementing break time
function incrementBreakTime(timeString) {
    let timeDisplay = timeString;

    timeDisplay++;

    return timeDisplay;
}
 
// FUNCTIONS FOR INCREMENTING AND DECREMENTING SESSION WHILE CLICKING SESSION LENGTH BUTTONS
function decrementSessionMin (timeString) {
    let timeDisplay = timeString.split(":");
    let minuteDisplay = parseInt(timeDisplay[0]);
    let secondDisplay = parseInt(timeDisplay[1]);

    minuteDisplay--;
    secondDisplay = "00";

    if(minuteDisplay === -1) {
        minuteDisplay = 0;
    }

    return minuteDisplay + ":" + secondDisplay;
}

function incrementSessionMin (timeString) {
    let timeDisplay = timeString.split(":");
    let minuteDisplay = parseInt(timeDisplay[0]);
    let secondDisplay = parseInt(timeDisplay[1]);

    minuteDisplay++;
    secondDisplay = "00";

    return minuteDisplay + ":" + secondDisplay;
}


// FUNCTIONS FOR INCREMENTING AND DECREMENTING BREAK SESSION WHILE CLICKING BUTTONS
function decrementBreakMin(timeString) {
    let timeDisplay = timeString.split(":");
    let minuteDisplay = parseInt(timeDisplay[0]);
    let secondDisplay = parseInt(timeDisplay[1]);

    minuteDisplay--;
    
    if(minuteDisplay === -1) {
        minuteDisplay = 0;
    }

    minuteDisplay = "0" + minuteDisplay;
    secondDisplay = "0" + secondDisplay;
 
    return minuteDisplay + ":" + secondDisplay;
}

function incrementBreakMin(timeString) {
    let timeDisplay = timeString.split(":");
    let minuteDisplay = parseInt(timeDisplay[0]);
    let secondDisplay = parseInt(timeDisplay[1]);

    minuteDisplay++;
    
    if(minuteDisplay === -1) {
        minuteDisplay = 0;
    }

    //minuteDisplay = "0" + minuteDisplay;
    secondDisplay = "0" + secondDisplay;
 
    return minuteDisplay + ":" + secondDisplay;
}