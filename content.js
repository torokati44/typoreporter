function scrapePage() {
    let title = document.querySelector('h1').innerText;
    // replace the selectors below with the correct ones for the author name and email
    let authorName = document.querySelector('.author__name').innerText;
    let authorEmail = authorName + "@telex.hu"; // # document.querySelector('.author-email').innerText;
    return {title: title, authorName: authorName, authorEmail: authorEmail};
}


// Get the current news site
let newsSite = window.location.hostname;
// Get the template for this site
chrome.storage.local.get([newsSite], function(result) {
    let templateName = result[newsSite];
    // Get the template
    chrome.storage.local.get([templateName], function(result) {
        let template = result[templateName];
        // Use the template
        //...
    });
});


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.text === 'report_error') {
            let scrapedData = scrapePage();
            let mailtoUrl = `mailto:${scrapedData.authorEmail}?subject=Error%20in%20Article%20-%20${encodeURIComponent(scrapedData.title)}&body=Dear%20${encodeURIComponent(scrapedData.authorName)},%0A%0AI%20noticed%20an%20error%20in%20your%20article%20titled%20"${encodeURIComponent(scrapedData.title)}".%0A%0AHere%20is%20the%20mistake:%0A"${encodeURIComponent(request.selection)}"%0A%0AHere%20is%20my%20suggestion%20for%20improvement:%0A%0A%5BYour%20Suggestion%20Here%5D%0A%0ABest%20regards,%0A%0A[Your%20Name%20Here]`;
            window.location.href = mailtoUrl;
        }
    }
);
