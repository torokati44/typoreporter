function onContextMenuClick(info, tab) {
    if (info.parentMenuItemId == "report_typo") {
        chrome.tabs.sendMessage(tab.id, {text: 'report_error', selection: info.selectionText, template: info.menuItemId});
    }
}

chrome.contextMenus.create({
    id: "report_typo",
    title: "Report Error",
    contexts: ["selection"]
});


// Error%20in%20Article%20-%20${{scrapedData.title}}
// Dear%20${{authorName)},%0A%0AI%20noticed%20an%20error%20in%20your%20article%20titled%20"${{title}}".%0A%0AHere%20is%20the%20mistake:%0A"${{selection}}"%0A%0AHere%20is%20my%20suggestion%20for%20improvement:%0A%0A%5BYour%20Suggestion%20Here%5D%0A%0ABest%20regards,%0A%0A{{yourName}}`;
const templates = {
    "typo_en": {
        "name": "Typo (English)",
        "subject": "Article: {{title}}",
        "body": "Dear {{authorName}},\n\nI am writing to you regarding your article \"{{title}}\" published on {{newsSite}}.\n\nI would like to ask you to correct the following:\n\n\n\nThank you in advance,\n{{myName}}",
    },
    "falsehood_en": {
        "name": "False information (English)",
        "subject": "Article: {{title}}",
        "body": "Dear {{authorName}},\n\nI am writing to you regarding your article \"{{title}}\" published on {{newsSite}}.\n\nI would like to ask you to correct the following:\n\n\n\nThank you in advance,\n{{myName}}",
    },
    "grammar_en": {
        "name": "Grammar (English)",
        "subject": "Article: {{title}}",
        "body": "Dear {{authorName}},\n\nI am writing to you regarding your article \"{{title}}\" published on {{newsSite}}.\n\nI would like to ask you to correct the following:\n\n\n\nThank you in advance,\n{{myName}}",
    },
    "typo_hu_i": {
        "name": "Elégpelés (tegez)",
        "subject": "Cikk: {{title}}",
        "body": "Kedves {{authorName}},\n\n{{newsSite}}-on megjelent \"{{title}}\" című cikkeddel kapcsolatban írok.\n\nSzeretném kérni, hogy a következőket javítsd:\n\n\n\nElőre is köszönöm,\n{{myName}}",
    },
    "typo_hu_f": {
        "name": "Elégpelés (magáz)",
        "subject": "Cikk: {{title}}",
        "body": "Tisztelt {{authorName}},\n\n{{newsSite}}-on megjelent \"{{title}}\" című cikkével kapcsolatban írok.\n\nSzeretném kérni, hogy a következőket javítsa:\n\n\n\nElőre is köszönöm,\n{{myName}}",
    },
    "falsehood_hu_i": {
        "name": "Hamis információ (tegez)",
        "subject": "Cikk: {{title}}",
        "body": "Kedves {{authorName}},\n\n{{newsSite}}-on megjelent \"{{title}}\" című cikkeddel kapcsolatban írok.\n\nSzeretném kérni, hogy a következőket javítsd:\n\n\n\nElőre is köszönöm,\n{{myName}}",
    },
    "falsehood_hu_f": {
        "name": "Hamis információ (magáz)",
        "subject": "Cikk: {{title}}",
        "body": "Tisztelt {{authorName}},\n\n{{newsSite}}-on megjelent \"{{title}}\" című cikkével kapcsolatban írok.\n\nSzeretném kérni, hogy a következőket javítsa:\n\n\n\nElőre is köszönöm,\n{{myName}}",
    },
    "grammar_hu_i": {
        "name": "Nyelvtani hiba (tegez)",
        "subject": "Cikk: {{title}}",
        "body": "Kedves {{authorName}},\n\n{{newsSite}}-on megjelent \"{{title}}\" című cikkeddel kapcsolatban írok.\n\nSzeretném kérni, hogy a következőket javítsd:\n\n\n\nElőre is köszönöm,\n{{myName}}",
    },
    "grammar_hu_f": {
        "name": "Nyelvtani hiba (magáz)",
        "subject": "Cikk: {{title}}",
        "body": "Tisztelt {{authorName}},\n\n{{newsSite}}-on megjelent \"{{title}}\" című cikkével kapcsolatban írok.\n\nSzeretném kérni, hogy a következőket javítsa:\n\n\n\nElőre is köszönöm,\n{{myName}}",
    },
};


for (ti in templates) {
    let tmpl = templates[ti];
    chrome.contextMenus.create({
        id: ti,
        parentId: "report_typo",
        title: tmpl["name"],
        contexts: ["selection"]
    });
}


chrome.contextMenus.onClicked.addListener(onContextMenuClick);