(function () {
    var data = new Date();

    function formatDate(d) {
        var dia = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
        var mes = d.getMonth() + 1;
        mes = mes < 10 ? '0' + mes : mes;
        return dia + '/' + mes + '/' + d.getFullYear();
    }
    document.getElementById('output').textContent = formatDate(data);
})()