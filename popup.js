// $(document).ready(function () {
// 	var newURL = "http://www.urbandictionary.com/define.php?term=" + selection;

// 	// selection of word
// 	$(this).on('dblclick', function() {
// 		chrome.tabs.create(url: newURL)
// 	});

// 	// console.log('hi');
// });


// function getword(info,tab) {

// //Currently this simply checks for which menu item was clicked.
//  if (info.menuItemId == "main_parent") {
//    chrome.tabs.create({
//       url: "https://www.google.com/search?q=" + info.selectionText,
//    })
//  }


// chrome.tabs.executeScript( {
//   code: "window.getSelection().toString();"
// }, function(selection) {
//   document.getElementById("status").value = selection[0];
// });

// TODO
// var selection;



// var work = function() {
// 	console.log(window.getSelection().toString());
// }

// document.body.addEventListener('dblclick', work);



// Create selection context

// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript(tab.id,
//       {code: 'window.getSelection().toString()'}, function(results) {
//     alert(results[0]);
//   });
// });

chrome.contextMenus.create({title: "Let's Urbandctionary it : '%s' ",
														contexts:["selection"],
														onclick: function(info){
														let link = "http://www.urbandictionary.com/define.php?term="+encodeURIComponent(info.selectionText);
														chrome.windows.create({url: link});
													}
});

chrome.contextMenus.create({title: "Let's Urbandctionary it : '%s' ",
														contexts:["selection"],
														onclick: function(info){
														let link = "http://www.dictionary.com/browse/"+encodeURIComponent(info.selectionText);
														chrome.windows.create({url: link});
													}
});


// var title = "Search Urban Dictionary for 'selection'";
// var id = chrome.contextMenus.create({"title": title, "contexts":["selection"], "onclick": genericOnClick});
//
// // A generic onclick callback function.
// function genericOnClick(info, tab) {
// 	var selectedWord = info.selectionText;
// 	// not able to add to url
// 	// var selectedWord = window.getSelection().toString();
//
// 	// googled encodeURIComponent
// 	var urbanLink = "http://www.urbandictionary.com/define.php?term=" + encodeURIComponent(selectedWord);
// 	// Open the new tab with the search query
// 	chrome.windows.create({ url: urbanLink});
// }
//
// // Update the contextMenus title
// function updateContextMenu(id) {
// 	// Update contextMenus with highlighted selection
// 	chrome.contextMenus.update(id, {"title": "Search Urban Dictionary for '%s'"});
// }
//
// // Updates the contextMenus title each time the menu is opened.
// updateContextMenu(id);
