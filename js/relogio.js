(function () {
    'use strict';
    var $relogio = document.getElementById('relogio');

    function horario() {
        var relogio = new Date();
        var horas = formataHora(relogio.getHours());
        var minutos = formataHora(relogio.getMinutes());
        var segundos = formataHora(relogio.getSeconds());

        return horas + ':' + minutos + ':' + segundos;
    }

    function formataHora(t) {
        return t < 10 ? '0' + t : t;
    }

    function mostraHoras(atual) {
        $relogio.textContent = atual;
    }

    mostraHoras(horario());

    setInterval(function(){
        mostraHoras(horario());
    }, 1000);

})();