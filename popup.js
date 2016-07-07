chrome.contextMenus.create({title: "Let's Urbandictionary it : '%s' ",
														// Need brackets on selection to grab selected word on Chrome
														contexts:["selection"],
														onclick: function(info){
														let link = "http://www.urbandictionary.com/define.php?term="+encodeURIComponent(info.selectionText);
														chrome.windows.create({url: link});
													}
});
	// // googled encodeURIComponent
	// var urbanLink = "http://www.urbandictionary.com/define.php?term=" + encodeURIComponent(selectedWord);
	// // Open the new tab with the search query
	// chrome.windows.create({ url: urbanLink});

$(document).ready(function () {
	// Check for current URL
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	  let url = tabs[0].url;
	  // console.log(url);

		if (url !== "http://www.urbandictionary.com/") {
			let text = "<div class='wrong-page'>You're on the wrong site buddy. </br><a target='_blank' href='http://www.urbandictionary.com'>Go here</a></div>"
			$('.container').append(text);
		} else {
			let text = "<div class='right-page'>Welcome back dawg!</div>"
			$('.container').append(text);
		}
	});
});
