function manejoMatrices() {
    var dato = null;
    /*
    * Definicion Matriz A:
    * [a b c]
    * [d e f]
    * [g h i]
    */
    //Arreglo individuales (esto es una limitante de JacaScript)
    var a1 = new Array();
    //Renglon 0
    a1[0] = 'a';
    a1[1] = 'b';
    a1[2] = 'c';

    var a2 = new Array();
    //Renglon 1
    a2[0] = 'd';
    a2[1] = 'e';
    a2[2] = 'f';

    var a3 = new Array();
    //Renglon 2
    a3[0] = 'g';
    a3[1] = 'h';
    a3[2] = 'i';

    //Arreglo de arreglos para que se haga una matriz
    var a = new Array();
    a[0] = a1;
    a[1] = a2;
    a[2] = a3;

    for (i = 0; i < a.length; i++) {
        for (j = 0; j < a[i].length; j++) {
            dato = a[i][j];
            imprimir(dato);
        }
    }
}

function imprimir(valor) {
    document.getElementById("resultado").innerHTML += valor + " ";
}

function limpiar() {
    document.getElementById("resultado").innerHTML = "";
}