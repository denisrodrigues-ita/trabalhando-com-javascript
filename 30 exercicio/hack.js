function alterarParagrafo() {
    'use strict';
    var msg = 'Paragrafo alterado.';
    var qtd = document.querySelectorAll('p').length;

    for (var i = 0; i < qtd; i++)
        document.querySelectorAll('p')[i].innerHTML = msg;

}