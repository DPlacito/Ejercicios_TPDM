var nombre = null; //variable global

function mostrarNombre(parametro) {
  //Se inicia la variable global
  nombre = parametro.value;
  var saludo = "Hola " + nombre.toUpperCase();
  document.getElementById("resultado").innerHTML = saludo;
}

function saludarLocal(parametro) {
  var nombre = parametro;
  alert("Hola " + nombre + " (local)");
  alert("Hola " + this.nombre + " (global)");
}

function saludarGlobal() {
  /*      * Utiliza la variable global     
   * con cada llamada.     
    * No puede acceder a la variable nombre    
    * creada en el metodo saludarLocal     
    * */ 
   alert("Hola " + nombre);
} 