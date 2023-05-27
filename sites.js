function addNewsSite(newsSite) {
    // Get the current list of news sites
    chrome.storage.local.get(['newsSites'], function(result) {
        let newsSites = result.newsSites || [];
        // Add the new site
        newsSites.push(newsSite);
        // Store the updated list
        chrome.storage.local.set({newsSites: newsSites}, function() {
            alert('News site added.');
        });
    });
}

function addTemplate(templateName, template) {
    // Store the template under its name
    chrome.storage.local.set({[templateName]: template}, function() {
        alert('Template saved.');
    });
}