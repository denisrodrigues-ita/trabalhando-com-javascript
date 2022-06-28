(function () {
    'use strict'
    var txt = document.getElementsByTagName('p');

    var prg = new Array();
    for (var i = 0; i < txt.length; i++) {
        var max = 200;
        if (txt[i].innerHTML.length > max) {
            prg[i] = txt[i].innerHTML.slice(0, max);
            document.getElementsByTagName('p')[i].innerHTML = prg[i] + '...';
        }
    }


})()