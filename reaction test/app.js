let time = 0

function Start() {
    //Visuals
    document.getElementById("start").innerHTML = ""
    document.getElementById("bod").style.backgroundColor = "white"
    document.getElementById("bod").style.color = "black"


    timerTimeout = setTimeout(Timer, Math.floor(Math.random() * 2000) + 500) //Setting a random timeout for the Timer() function
    setTimeout(() => {
        window.addEventListener("click", Fail) //Adding an event listener to the Fail() function
    }, 10) //Setting a timeout for the EarlyClick() function to prevent it frm triggering immediately
}

function Fail() {
    clearTimeout(timerTimeout) //Clearing the timeout of the Timer() function so it is not possible to continue after failing
    //Viusals
    document.getElementById("bod").style.backgroundColor = "#940c0c"
    document.getElementById("bod").style.color = "white"
    document.getElementById("start").innerHTML = "<h1>You clicked too early, refresh to try again</h1>"
}

function Timer() {
    window.removeEventListener("click", Fail) //Removing the event lostener so it is not possible to fail anymore
    //Visuals
    document.getElementById("bod").style.backgroundColor = "green"
    document.getElementById("start").innerHTML = "<h1>Click now!</h1>"
    interval = setInterval(() => { //Increasing the time
        time++
    }, 1)
    window.addEventListener("click", End) //Ends the timer
}

function End() {
    clearInterval(interval) //Stops the interval
    window.removeEventListener("click", End) //Removes the event listener so the function doesn't repeat if on click
    document.getElementById("start").innerHTML = `<h1>Your time is</h1><p>${time} ms<br><br><br>Refresh to try again</p>` //Time display
}