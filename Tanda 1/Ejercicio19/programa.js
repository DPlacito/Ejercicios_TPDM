function sucesionFibonacci(entrada) {
    limpiar();

    var a = 0;
    var b = 1;
    var c = null;
    var noMaximoElementos = 100;
    var elementosSerie = entrada.value;//Validamos el valor de entrada
    if (elementosSerie > noMaximoElementos) {
        imprimir("Debes probar con menos de 100 elementos");
        return;
    }
    //Imprimimos valores iniciales
    imprimir(a);
    imprimir(b);

    for (i = 0; i < elementosSerie - 2; i++) {
        c = a + b; 
        a = b;
        b = c;
        imprimir(c);
    }
}

function imprimir(valor) {
    document.getElementById("resultado").innerHTML += valor + " ";
}

function limpiar() {
    document.getElementById("resultado").innerHTML = "";
}