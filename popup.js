chrome.contextMenus.create({title: "What's the urbandictionary definition of '%s'",
														// Need brackets on selection to grab selected word on Chrome
														contexts:["selection"],
														onclick: function(info){
														let link = "http://www.urbandictionary.com/define.php?term="+encodeURIComponent(info.selectionText)+"?id=helpushelpyou";
														chrome.windows.create({url: link});
													}
});

chrome.contextMenus.create({title: "What's the standard definition of '%s'",
														contexts:["selection"],
														onclick: function(info){
														let link = "http://www.dictionary.com/browse/"+encodeURIComponent(info.selectionText)+"?id=helpushelpyou";
														chrome.windows.create({url: link});
													}
});

chrome.contextMenus.create({title: "Discover the story of '%s' on Wikipedia",
														contexts:["selection"],
														onclick: function(info){
														let link = "https://en.wikipedia.org/wiki/"+encodeURIComponent(info.selectionText)+"?id=helpushelpyou";
														chrome.windows.create({url: link});
													}
});

chrome.contextMenus.create({title: "How do you pronounce '%s' in Chinese",
														contexts:["selection"],
														onclick: function(info){
														let link = "https://translate.google.com/?ion=1&espv=2&bav=on.2,or.r_cp.&bvm=bv.126130881,d.cGc&biw=1855&bih=951&dpr=1&um=1&ie=UTF-8&hl=en&client=tw-ob#en/zh-CN/"+encodeURIComponent(info.selectionText)+"?id=helpushelpyou";
														chrome.windows.create({url: link});
													}
});

chrome.contextMenus.create({title: "Show me some pictures of '%s'",
														contexts:["selection"],
														onclick: function(info){
														let link = "https://www.google.com/search?noj=1&site=imghp&tbm=isch&source=hp&biw=1855&bih=990&q="+encodeURIComponent(info.selectionText)+"?id=helpushelpyou"
														chrome.windows.create({url: link});
													}
});

chrome.contextMenus.create({title: "I want to buy '%s'",
														contexts:["selection"],
														onclick: function(info){
														let link = "https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords="+encodeURIComponent(info.selectionText)+"?id=helpushelpyou"
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
