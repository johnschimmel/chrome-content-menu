
//content script
var clickedEl = null;

document.addEventListener("mousedown", function(event){
    //right click
    console.log(event)
    console.log('target',event.target)
    // console.log('last right clicked', event.target)
    // if(event.button == 2) { 
        clickedEl = event.target;

    
    // }
}, true);log()																																										

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request == "getClickedEl") {
    	console.log('request to send last right clicked element')
        sendResponse({value: clickedEl});
    }
});
