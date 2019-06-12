
// We replace any request with the `prefix` by a request with `newPrefix`.
var prefix = "https://www.offst.org/payment/";
var newPrefix = "http://127.0.0.1:8080/";
var pattern = prefix + "*";

function redirect(requestDetails) {
    console.log("Redirecting:" + requestDetails.url);
    var afterPrefix = requestDetails.url.substr(prefix.length)
    return {
        redirectUrl: newPrefix + afterPrefix,
    };
}

browser.webRequest.onBeforeRequest.addListener(
    redirect,
    {urls: [pattern]},
    ["blocking"]
);
