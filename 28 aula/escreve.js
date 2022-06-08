function escreve() {
    var nome = document.getElementById('txtNome').value;
    var tipo = document.querySelector('input[name="tipoDeProgramador"]:checked').value;
    var output = document.getElementById('output').innerHTML = 'Bom dia, ' + nome + '<br>Já vimos que você é desenvolvedor ' + tipo;
}