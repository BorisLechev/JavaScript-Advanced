function wikiParser(selector) {
    let container = $(selector);
    let line = container.text();

    let headingPattern = /(=+)(.+?)(=+)/g;
    let boldPattern = /(''')(.+?)(''')/;
    let italicsPattern = /('')(.+?)('')/;
    let linkPattern = /(\[\[)([a-zA-Z\d\s|]+)(]])/g;

    while (headingPattern.test(line)) {
        line = line.replace(headingPattern, headingReplacer);
    }

    while (boldPattern.test(line)) {
        line = line.replace(boldPattern, boldReplacer);
    }

    while (italicsPattern.test(line)) {
        line = line.replace(italicsPattern, italicsReplacer);
    }

    while (linkPattern.test(line)) {
        line = line.replace(linkPattern, linkReplacer);
    }

    container.html(line);

    function headingReplacer(match, firstGroup, secondGroup, thirdGroup) {
        if (firstGroup.length === 1) {
            firstGroup = "<h1>";
            thirdGroup = "</h1>";
        } else if (firstGroup.length === 2) {
            firstGroup = "<h2>";
            thirdGroup = "</h2>";
        } else if (firstGroup.length === 3) {
            firstGroup = "<h3>";
            thirdGroup = "</h3>";
        }

        return firstGroup + secondGroup + thirdGroup;
    }

    function boldReplacer(match, firstGroup, secondGroup, thirdGroup) {
        firstGroup = "<b>";
        thirdGroup = "</b>";

        return firstGroup + secondGroup + thirdGroup;
    }

    function italicsReplacer(match, firstGroup, secondGroup, thirdGroup) {
        firstGroup = "<i>";
        thirdGroup = "</i>";

        return firstGroup + secondGroup + thirdGroup;
    }

    function linkReplacer(match, firstGroup, secondGroup, thirdGroup) {
        let args = secondGroup.split("|");
        firstGroup = `<a href="/wiki/${args[0]}">`;
        thirdGroup = `</a>`;

        if (args.length > 1) {
            secondGroup = args[1];
        } else {
            secondGroup = args[0];
        }

        return firstGroup + secondGroup + thirdGroup;
    }
}


window.onload = function () {
    wikiParser('#wiki');
};