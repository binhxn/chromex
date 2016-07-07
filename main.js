function displayTimer() {
	var timer = parseInt(performance.now());

	console.log(timer);
	document.getElementById('timer').innerHTML=timer + ' seconds';


	$('#status').hide();
}




displayTimer();