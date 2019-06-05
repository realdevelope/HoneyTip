
function change() {
	let audioTag = document.getElementById("test");

	window.location.href = "./testsecond.html?current=" + audioTag.currentTime;
}

function start(currentTime) {
	let audioTag = document.getElementById("test");
	let audio = new Audio('../resource/숭실대_교가.mp3');
	currentTime = parseFloat(currentTime);

	audio.currentTime = currentTime;
	audio.load();

	setTimeout(function() {
		audio.play();

	}, 100);
}