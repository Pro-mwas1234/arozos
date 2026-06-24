/*
    getTitle.js
    Get the title of the page
*/  

requirelib("http");
var pageContent = http.get(url);

// FIX: Check if the page content is null (e.g., network error or blocked request)
if (pageContent == null) {
    sendResp("");
} else {
    var matches = pageContent.match(/<title>(.*?)<\/title>/);
    if (matches == null || matches.length == 0){
        sendResp("");
    }else{
        sendResp(matches[0].replace(/(<([^>]+)>)/gi, ""));
    }
}
