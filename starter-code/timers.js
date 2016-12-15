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
  console.log ("counterState is " + counterState)
  if (counterState === "off") {
    timer = setInterval(timerAddSecond, 1000)
    counterState = "on"
    console.log("counterState turned on")
  }
}

function timerAddSecond () {
  console.log("timerAddSecond triggered")
  seconds ++
  updateTimerDisplay()
}

function updateTimerDisplay () {
  $("#timer").text("Time elapsed: " + seconds)
}

function resetPress () {
  console.log("reset pressed")
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
    console.log("counterState set to paused")
    break
    case "paused":
    console.log("unpausing")
    timer = setInterval(timerAddSecond, 1000)
    counterState = "on"
    console.log("counterState turned on")
    break
  }
  
}

