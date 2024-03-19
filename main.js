"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fastest_levenshtein_1 = require("fastest-levenshtein");
var AnchorJS = require("anchor-js");
var anchors = new AnchorJS();
document.addEventListener('turbo:load', function () {
    anchors.add();
    var div = document.getElementById('four-oh-four-suggestion');
    if (div) {
        var xhr_1 = new XMLHttpRequest();
        xhr_1.onload = function () {
            if (xhr_1.status === 200) {
                var xml = xhr_1.responseXML;
                var urls = Array.from(xml.querySelectorAll('urlset > url > loc')).map(function (el) { return el.textContent; });
                var url = new URL((0, fastest_levenshtein_1.closest)(window.location.href, urls));
                div.innerHTML = "<a href=\"".concat(url.href, "\">").concat(url.pathname, "</a>");
            }
            else {
                div.innerHTML = '<a href="/">/</a>';
            }
        };
        xhr_1.open('GET', "".concat(window.location.protocol, "//").concat(window.location.host, "/sitemap.xml"));
        xhr_1.send();
    }
});
