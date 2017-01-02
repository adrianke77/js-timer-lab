// your code here:
var seconds = 0
var counterState = "off"
var timer
$("#start").on("click", startPress)
$("#reset").on("click", resetPress)
$("#pause").on("click", pausePress)

function startPress () {
  if (seconds === 0) 
    $("#timer").text("Time elapsed: 0")
  if (counterState === "off") {
    timer = setInterval(timerAddSecond, 1000)
    counterState = "on"
  }
}

function timerAddSecond () {
  seconds ++
  updateTimerDisplay()
}

function updateTimerDisplay () {
  $("#timer").text("Time elapsed: " + seconds)
}

function resetPress () {
  clearInterval(timer)
  $("#timer").text("Stop Watch")
  counterState = "off"
  seconds = 0
}

function pausePress () {
  console.log("pause pressed")
  switch (counterState) {
    case "on":
    console.log("paused")
    clearInterval(timer)
    counterState = "paused"
    break
    case "paused":
    console.log("unpausing")
    timer = setInterval(timerAddSecond, 1000)
    counterState = "on"
    break
  }
  
}

