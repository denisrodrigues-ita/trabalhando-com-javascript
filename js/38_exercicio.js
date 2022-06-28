var name = 'denis rodrigues dos santos';

(function nomeFormatado() {
    var ultimoEspaco = name.lastIndexOf(' ');

    if (ultimoEspaco <= 0) {
        return name;
    }

    var ultimoNome = name.slice(ultimoEspaco + 1);
    var primeiroNome = name.slice(0, ultimoEspaco);

    return document.getElementById('output').innerHTML = ultimoNome + ', ' + primeiroNome + ', ' + 'bom dia!';
})()