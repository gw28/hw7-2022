
var video = document.querySelector("#player1");

// turns off autoplay and loop
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)
});

// plays video with "play" button and displays current value
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// pauses video with "pause" button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// slows by 10% with "slower" button
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= .90;
	console.log("Speed is " + video.playbackRate);
});


// speeds by 10% with "faster" button
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= .90;
	console.log("Speed is " + video.playbackRate);
});

// video skip ahead 10 seconds with "skip ahead" button
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime);
});

// slider updating volume
document.querySelector("#slider").addEventListener("click", function() {
	// console.log("The current volume is " + video.volume)
	video.volume = this.value / 100;
	console.log("The current volume is " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
})


//mute and unmute needs if else  , there is a mute/unmute function in js
document.querySelector("#mute").addEventListener("click", function() {
	// console.log("Muted button pressed")
	if (video.muted) {
		console.log("Unmute")
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		console.log("Mute")
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
})

// oldschool class
document.querySelector("#vintage").addEventListener("click", function() {
	// <video class = "video oldSchool" , orginal class = "video"
	console.log("Old schoooooool")
	video.setAttribute("class", "video oldSchool");
})

// original button -> remove old school
document.querySelector("#orig").addEventListener("click", function() {
	console.log("back to OG")
	video.setAttribute("class", "video");
})