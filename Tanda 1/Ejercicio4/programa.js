document.write("Programa para determinar si un numro es par:<br/>");

var num = parseInt( prompt("Proporciona un numero", 1) );

if(num>=0){
    if(num%2 ==0){
        document.write("SI es numero par");
    }
    else{
        document.write("NO es numero par");
    }
}
else{
    document.write("Proporciona el valor entero y mayor a cero");
}