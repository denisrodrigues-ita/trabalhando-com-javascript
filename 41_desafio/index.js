(function () {
    'use strict';
    var $img = document.querySelector(".img1");
    var num = sorteio();

    switch (num) {
        case 1:
            $img.classList.remove('img1');
            $img.classList.add('img2');
            break;
        case 2:
            $img.classList.remove('img1');
            $img.classList.add('img3');
            break;
        case 3:
            $img.classList.remove('img1');
            $img.classList.add('img4');
            break;
        case 4:
            $img.classList.remove('img1');
            $img.classList.add('img5');
            break;
        default:
            break;
    }

    function sorteio() {
        var n = Math.floor(5 * Math.random());
        return n;
    }
})();