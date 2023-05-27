function onContextMenuClick(info, tab) {
    if (info.menuItemId === "report") {
        chrome.tabs.executeScript({
            code: 'window.getSelection().toString();'
        }, function(selection) {
            chrome.tabs.sendMessage(tab.id, {text: 'report_error', selection: selection[0]});
        });
    }
}

chrome.contextMenus.create({
    id: "report",
    title: "Report Error",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(onContextMenuClick);