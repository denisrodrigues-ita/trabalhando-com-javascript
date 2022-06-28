(function () {
    'use strict';
    var num = parseInt(prompt('Digite um número'));

    sortear(num);

    function sortear(n) {

        var nSorteado = Math.floor(n * Math.random());

        document.getElementById('output').textContent = nSorteado;
    }
})();
