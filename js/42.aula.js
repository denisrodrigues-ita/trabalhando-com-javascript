(function () {
    var arr = new Array();
    arr = ['1', 2, 3, 4, 'kaka', 30, '59', 2];

    var sohNumeros = arr.every(function (element, index, arr) {
        return typeof element === 'number';
    });
    console.log(sohNumeros);

    var aoMenosUmNumero = arr.some(function (element, index, arr) {
        return typeof element === 'number';
    });
    console.log(aoMenosUmNumero);

    var numeros = arr.filter(function (element, index, arr) {
        return typeof element === 'number';
    });
    console.log(numeros);

    arr.forEach(function (element, index, arr) {
        console.log('elemento: ' + element + ' index: ' + index + ' array: ' + arr);
    })

    var posicaofirst = arr.indexOf(2);
    console.log('posição: ' + posicaofirst);

    var posicaoLast = arr.lastIndexOf(2);
    console.log('posição: ' + posicaoLast);

    var a = numeros.map(function (element, index, arr) {
        return element * index;
    });
    console.log(a);

    var arr2 = arr.concat(a, 7, 'hello world');
    console.log(arr2);

    var str = arr2.join(' -- ');
    console.log(str);

    arr.push('novo', 'item');
    console.log(arr);

    var ultimoItem = arr.pop();
    ultimoItem = arr.pop();
    console.log(ultimoItem);

    var primeiroItem = arr.shift();
    console.log(primeiroItem);

    arr.unshift('eai');
    console.log(arr);

    console.log(numeros);
    var somaDeArr = numeros.reduce(function (anterior, atual, index) {
        console.log('anterior: ' + anterior + ' atual: ' + atual + ' index: ' + index);
        return anterior + atual + index;
    });
    console.log(somaDeArr);

    console.log(numeros);
    var reduceR = numeros.reduceRight(function (anterior, atual, index) {
        console.log('anterior: ' + anterior + ' atual: ' + atual + ' index: ' + index);
        return anterior + atual + index;
    });
    console.log(reduceR);

    console.log(arr2);
    console.log(arr2.slice(2, 5));

    arr2.splice(2, 3, 'melão', 'limão');
    console.log(arr2);
})();