// create a new Audio object
var sound = new Audio("sound/suspense.wav");

// get references to the play and stop buttons
var playBtn = document.getElementById("play-btn");
var stopBtn = document.getElementById("stop-btn");

// add click event listeners to the play and stop buttons
playBtn.addEventListener("click", function() {
    sound.play();
    playBtn.style.display = "none";
    stopBtn.style.display = "block";
});

stopBtn.addEventListener("click", function() {
    sound.pause();
    sound.currentTime = 0;
    stopBtn.style.display = "none";
    playBtn.style.display = "block";    
});
