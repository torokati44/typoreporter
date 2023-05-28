
const site_data = {
    "24.hu": {
        "site_name": "24.hu",
        "title_selector": "h1.o-post__title",
        "author_name_selector": "a.m-author__name",
        // source: https://24.hu/impresszum/
        "author_emails": {
            "Pető Péter": "peter.peto",
            "Szigeti Péter": "peter.szigeti",
            "Bita Dániel": "daniel.bita",
            "Pál Zsombor": "zsombor.pal",
            "Molnár Dávid": "david.molnar",
            "Török László": "laszlo.torok",
            "Benke Ágnes": "agnes.benke",
            "Cseri Péter": "peter.cseri",
            "Nagy József": "jozsef.nagy",
            "Vitéz F. Ibolya": "ibolya.vitez",
            "Balavány György": "gyorgy.balavany",
            "D. Kovács Ildikó": "ildiko.dkovacs",
            "Farkas György": "gyorgy.farkas",
            "Horváth Csaba László": "csaba.horvath",
            "Kassai Zsigmond": "zsigmond.kassai",
            "Kerner Zsolt": "zsolt.kerner",
            "K. Kiss Gergely": "gergely.kiss",
            "Kolontár Krisztián": "krisztian.kolontar",
            "Kovács Márta": "marta.kovacs",
            "Kozák Dániel": "daniel.kozak",
            "Mázsár Tamás": "tamas.mazsar",
            "Nagy Gergely Miklós": "gergelymiklos.nagy",
            "Papp Atilla": "atilla.papp",
            "Spirk József": "jozsef.spirk",
            "Tamásné Szabó Zsuzsanna": "zsuzsanna.szabo",
            "Vaskor Máté": "mate.vaskor",
            "Baka F. Zoltán": "info",
            "Szegő Iván Miklós": "info",
            "Borovitz Tamás": "tamas.borovitz",
            "Besenyei Balázs": "balazs.besenyei",
            "Biró Péter": "peter.biro",
            "Gégény-Blonszki Renáta": "renata.blonszki",
            "Grósz Petra": "petra.grosz",
            "Orosz R. Zoltán": "zoltan.orosz",
            "Rugli Tamás": "tamas.rugli",
            "Schultz Antal": "antal.schultz",
            "Tóth Bálint Soma": "balintsoma.toth",
            "Futó Csaba": "csaba.futo",
            "Dajka Balázs": "balazs.dajka",
            "Kálnoki Kis Attila": "attila.kalnoki",
            "Aranyossy Áron": "aron.aranyossy",
            "Pincési László": "laszlo.pincesi",
            "Inkei Bence": "bence.inkei",
            "Jankovics Márton": "marton.jankovics",
            "Bodnár Judit Lola": "judit.bodnar",
            "Kránicz Bence": "bence.kranicz",
            "Vincze Miklós": "miklos.vincze",
            "Birkás Péter": "peter.birkas",
            "Bihari Dániel": "daniel.bihari",
            "Lányi Örs": "ors.lanyi",
            "Lugosi Péter": "peter.lugosi",
            "Stéger Dávid": "david.steger",
            "Sopronyi Gyula": "gyula.sopronyi",
            "Csóti Rebeka": "rebeka.csoti",
            "Adrián Zoltán": "zoltan.adrian",
            "Mohos Márton": "marton.mohos",
            "Szajki Bálint": "balint.szajki",
            "Varga Jennifer": "yennivarga@gmail.com",
            "Dékány László": "laszlo.dekany",
            "Bánszegi Rebeka": "rebeka.banszegi",
            "Bicsák Boglárka": "boglarka.bicsak",
            "Trencsényi Ádám": "adam.trencsenyi",
            "Katz Dávid": "david.katz",
            "Rege Sándor": "sandor.rege",
            "Balogh Mária": "maria.balogh",
            "Simon Dóra": "dora.simon",
        }
    },

    "444.hu": {
        "site_name": "!!444!!!",
        "title_selector": "body > div > div > div > div > h1",
        "author_name_selector": "body > div > div > div > div > div > div > div > a[href*=author]",
        // source: https://444.hu/impresszum
        "author_emails": {
            "Ács Dániel": "acsd",
            "Ács Dániel ACsi": "acsi",
            "Bankó Gábor": "bankog",
            "Bede Márton": "bedem",
            "Benics Márk": "benicsm",
            "Boros Júlia": "borosj",
            "Botos Tamás": "botost",
            "Csurgó Dénes": "csurgod",
            "Czinkóczi Sándor": "czinkoczis",
            "Erdélyi Péter": "erdelyip",
            "Gazda Albert": "gazdaa",
            "Haszán Zoltán": "haszanz",
            "Herczeg Márk": "herczegm",
            "Horváth Bence": "horvathb",
            "Kaufmann Balázs": "kaufmannb",
            "Király András": "kiralya",
            "Kiss Bence": "kissb",
            "Kiss Imola": "kissi",
            "Kiss Veronika": "kissv",
            "László Gergely": "laszlog",
            "Lovas Gergő": "lovasg",
            "Magyari Péter": "magyarip",
            "Mészáros Juli": "meszarosj",
            "Mészáros Zsófia": "mzsofi",
            "Miklósi Gábor": "miklosig",
            "Németh Dániel": "nemethd",
            "Plankó Gergő": "plankog",
            "Pongrácz Éva": "pongracze",
            "Rényi Pál Dániel": "renyid",
            "Sebesi Zsolt": "sebesizs",
            "Solti Hanna": "soltih",
            "Sulymosi Erik": "sulymosie",
            "Szász Zsófi": "szaszzs",
            "Szedeli Zsuzsa": "szedelizs",
            "Szily László": "szilyl",
            "Szurovecz Illés": "szuroveczi",
            "Tamás Bence Gáspár": "tamasbg",
            "Tóth-Szenesi Attila": "tothszenesia",
            "Uj Péter": "ujp",
            "Urfi Péter": "urfip",
            "Winkler Róbert": "winkler",
        }
    },

    "telex.hu": {
        "site_name": "Telex",
        "title_selector": "div.title-section__top > h1",
        "author_name_selector": "div.author__info > a.author__name",
        // source: https://telex.hu/dokumentum/impresszum
        "author_emails": {
            "Kárpáti Márton": "karpatim",
            "Dull Szabolcs": "dullsz",
            "Kárpáti Márton": "karpatim",
            "Kárpáti András": "bandess",
            "Tóth-Biró Marianna": "birom",
            "Rovó Attila": "rovoa",
            "Munk Veronika": "munkv",
            "Ajpek Orsi": "ajpeko",
            "Bolcsó Dániel": "bolcsod",
            "Haász János": "haaszj",
            "Hanula Zsolt": "hanulazs",
            "Iván András": "ivana",
            "Joób Sándor": "joobs",
            "Koroknai Gergely": "koroknaig",
            "Lengyel-Szabó Péter": "lengyelszabop",
            "Liptai Lívia": "liptail",
            "Német Tamás": "nemettamas",
            "Sarkadi Zsolt": "sarkadizs",
            "Szalma Baksi Ferenc": "szbf",
            "Somogyi Péter": "somogyip",
            "Aradi Hanga Zsófia": "aradihzs",
            "Ács Bori": "acsb",
            "Ághassi Attila": "aghassia",
            "Barnóczki Brigitta": "barnoczkib",
            "Bozzay Balázs": "bozzayb",
            "Böszörményi Edina": "boszormenyie",
            "Brückner Gergely": "brucknerg",
            "Cseke Balázs": "csekeb",
            "Előd Fruzsina": "elodf",
            "Fehér János": "feherj",
            "Ferenci Ármin": "ferencia",
            "Flachner Balázs": "flachnerb",
            "Halász Nikolett": "halaszn",
            "Iván-Nagy Szilvia": "ivansz",
            "Janecskó Kata": "janecskok",
            "Kaiser Orsolya": "kaisero",
            "Klág Dávid": "klagd",
            "Márton Balázs": "martonb",
            "Mizsur András": "mizsura",
            "Molnár Réka": "molnarr",
            "Nagy Bálint": "nagyb",
            "Nagy Nikoletta": "nagyn",
            "Nyilas Gergely": "nyilasg",
            "Pál Tamás": "palt",
            "Pándi Balázs": "pandib",
            "Patakfalvi Dóra": "patakfalvid",
            "Pintér Luca": "pinterl",
            "Presinszky Judit": "presinszkyj",
            "Sajó Dávid": "sajod",
            "Stöckert Gábor": "stockertg",
            "Tenczer Gábor": "tenczerg",
            "Thüringer Barbara": "thuringerb",
            "Tóth Gergely": "tothg",
            "Világi Máté": "vilagim",
            "Vincze Barbara": "vinczeb",
            "Weiler Vilmos": "weilerv",
            "Zách Dániel": "zachd",
            "Bakró-Nagy Ferenc": "bakronagyf",
            "Bődey János": "bodeyj",
            "Fábián Tamás": "fabiant",
            "Fillér Máté": "fillerm",
            "Halász Júlia": "halaszj",
            "Hevesi-Szabó Lujza": "hevesiszabol",
            "Huszti István": "husztip",
            "Lerch Júlia": "lerchj",
            "Melegh Noémi Napsugár": "meleghnn",
            "Németh Péter": "nemethp",
            "Ostyáni János": "ostyanij",
            "Rostás Bianka": "rostasb",
            "Simor Dániel": "simord",
            "Szilágyi Máté": "szilagyim",
            "Szilli Tamás": "szillit",
            "Török Virág": "torokv",
            "Bozsó Ági": "bozsoa",
            "Dömötör Bálint": "domotorb",
            "Körömi Csongor": "koromics",
            "Merényi \"Grafitember\" Dániel": "merenyid",
            "Mészáros Tamás": "meszarost",
            "Horváth-Kávai Andrea": "horvathkavaia",
            "Cséfalvay Attila": "csefalvaya",
            "Gűth Ervin": "guthe",
            "Laczó Balázs": "laczob",
            "Móra Ferenc Sándor": "morafs",
            "Sudár Ágnes": "sudara",
            "Rácz Attila": "racza",
            "Arnótszky Janka": "arnotszkyjj",
            "Takács Andrea": "takacsa",
            "Egyed Anna": "egyeda",
            "Jenei Miklós": "jeneim",
            "Kolozsvári Tímea": "kolozsvarit",
            "Marczisovszky Márton": "marczisovszkym",
            "Demeter Ágnes": "demetera",
            "Kis Móni": "kism",
            "Nehéz-Posony Ferenc": "pozsi",
            "Fodor Orsolya": "fodoro",
            "Kárpáti László": "laszlo.karpati",
            "Balog Zoltán": "zoltan.balog",
            "Balogh Zoltán": "baloghz",
            "Pánczél Tamás": "panczelt",
            "Kéri Viktor": "keriv",
            "Rátkai Zsófi": "ratkaizs",
            "Hanula Zsolt": "hanulazs",
            "Nagy Nikoletta": "nagyn",
            "Világi Máté": "vilagim",
        }
    },

    "phoronix.com": {
        "site_name": "Phoronix",
        "title_selector": "article > h1",
        "author_name_selector": "article > div.author > a",
        // source: https://www.phoronix.com/contact
        "author_emails": {
            "Michael Larabel": "phoronix",
        }
    },

};


function scrapePage() {
    let newsSite = window.location.hostname;
    if (newsSite.startsWith("www.")) {
        newsSite = newsSite.slice(4);
    }
    let siteData = site_data[newsSite];
    let title = document.querySelector(siteData["title_selector"]).innerText;
    let authorName = document.querySelector(siteData["author_name_selector"]).innerText;
    let authorEmail = siteData["author_emails"][authorName];
    if (!authorEmail.includes("@")) {
        authorEmail += "@" + newsSite;
    }
    return {title: title, authorName: authorName, authorEmail: authorEmail};
}

/*
// Get the template for this site
browser.storage.local.get([newsSite], function(result) {
    let templateName = result[newsSite];
    // Get the template
    browser.storage.local.get([templateName], function(result) {
        let template = result[templateName];
        // Use the template
        //...
    });
});
*/

browser.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.text === 'report_error') {
            let scrapedData = scrapePage();
            let mailtoUrl = `mailto:${scrapedData.authorEmail}?subject=Error%20in%20Article%20-%20${encodeURIComponent(scrapedData.title)}&body=Dear%20${encodeURIComponent(scrapedData.authorName)},%0A%0AI%20noticed%20an%20error%20in%20your%20article%20titled%20"${encodeURIComponent(scrapedData.title)}".%0A%0AHere%20is%20the%20mistake:%0A"${encodeURIComponent(request.selection)}"%0A%0AHere%20is%20my%20suggestion%20for%20improvement:%0A%0A%5BYour%20Suggestion%20Here%5D%0A%0ABest%20regards,%0A%0A[Your%20Name%20Here]`;
            window.location.href = mailtoUrl;
        }
    }
);
