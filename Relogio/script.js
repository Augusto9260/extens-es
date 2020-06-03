setInterval(function() {
	let today = new Date();
	let hours = today.getHours();
	let minutes = today.getMinutes();
	let seconds = today.getSeconds();

	if (hours <= 9) {
		hours = '0' + hours;
	}
	if (minutes <= 9) {
		minutes = '0' + minutes;
	}
	if (seconds <= 9) {
		seconds = '0' + seconds;
	}

	document.getElementById('hours').innerHTML = hours + ':' + minutes + ':' + seconds;
	
}, 1000);
 

