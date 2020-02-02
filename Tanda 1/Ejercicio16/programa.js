function manejoArreglos() {
    var lengua = null;

    //Definir arreglos
    var lenguas = new Array();
    lenguas[0] = "Chino Mandarin ,";
    lenguas[1] = "Espanish ,";
    lenguas[2] = "Ingles ,";
    lenguas[3] = "Hindi";

    //Recorremos el Arreglo
    for (i = 0; i < lenguas.length; i++) {
        //Accese a cada elemento uno a uno
        lengua = lenguas[i];
        //Imprimimos cada elemento del arreglo
        imprimir(lengua);
    }
}

function imprimir(valor) {
    document.getElementById("resultado").innerHTML += valor + " ";
}
function limpiar() {
    document.getElementById("resultado").innerHTML = "";
}