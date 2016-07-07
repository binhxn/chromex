$(document).ready(function() {
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		// if the command is start, call start function
		if (request.command === "start") {
			start();
			sendResponse({"message": "Start time now"})
		}
	});

	console.log('hi');


	function start() {
		var beginTime = moment();

		setInterval(function() {
			// keeps track of difference between start time and refresh time
			var diffTime = moment().diff(beginTime, 'seconds');

			chrome.runtime.sendMessage({
				"command": "updateTime",
				"time": diffTime
			})
		}, 1000);
	}
})




// // update element on DOM with current diffTime
// $('.timer').html(diffTime);