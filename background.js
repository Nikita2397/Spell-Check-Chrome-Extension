console.log('Background Running...');

// chrome.runtime.onMessage.addListener(receiver);

// //window.word = 'spell check';

// function receiver(request, sender, sendResponse) {
//   console.log(request);
// }

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	let msg = {
		txt: "hello"
	}
	chrome.tabs.sendMessage(tab.id,msg);
}