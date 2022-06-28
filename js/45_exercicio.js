(function () {
    var $par = document.querySelectorAll('p');

    for (var i = 0; i < $par.length; i++) {
        $par[i].innerHTML = formataParagrafos($par[i].innerHTML);
    }

    function formataParagrafos(txt) {
        var arr = txt.split(' ');

        if (arr.length > 10) {
            return arr.slice(0, 10).join(' ') + '...';
        }

        return txt;
    }

})();