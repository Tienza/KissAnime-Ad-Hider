// ==UserScript==
// @name         KissAnime Auto Ad Hider
// @namespace    http://kissanime.*/*
// @version      0.1
// @description  Auto Hides All Ads on KissAnime
// @author       Piradon (Tien) Liengtiraphan
// @match        http://kissanime.ru/*
// @match	 http://kisscartoon.se/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    Element.prototype.remove = function() {
        this.parentElement.removeChild(this);
    };
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
        for(var i = this.length - 1; i >= 0; i--) {
            if(this[i] && this[i].parentElement) {
                this[i].parentElement.removeChild(this[i]);
            }
        }
    };
    setTimeout(function () {
        var temp1 = document.querySelectorAll('a');
        for(var i = 0; i < temp1.length; i++){
            if($(temp1[i]).html() == "Hide")
                temp1[i].click();
            else if($(temp1[i]).attr('target') == "_blank" && ($(temp1[i]).html() != "Cartoon list" && $(temp1[i]).html() != "Read Manga" && $(temp1[i]).html() != "Read Novel" && $(temp1[i]).html() != "Watch Drama" && $(temp1[i]).html() != "Anime list"))
                temp1[i].remove();
        }
    }, 2000);
})();