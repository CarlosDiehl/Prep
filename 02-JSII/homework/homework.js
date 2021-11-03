// No cambies los nombres de las funciones.

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function incrementarPorUno(array) {
  // "array" debe ser una arreglo de números enteros
  // Aumenta cada número por 1 y devuelve el array
  // Tu código:
  for (let index = 0; index < array.length; index++) {
    array[index] = array[index] + 1;
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var string = palabras[0];
  for (let index = 1; index < palabras.length; index++) {
    string = string + " " + palabras[index];
  }
  return string;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let index = 0; index < array.length; index++) {
    if(array[index] === elemento) {
      return true;
    }
  }
    return false;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser un array de enteros
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
var promedio = 0;
for (let index = 0; index < resultadosTest.length; index++) {
  promedio = promedio + resultadosTest[index];
}
return promedio / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser un array de enteros
  // Devuelve el número más grande
  // Tu código:
  var max = numeros[0];
  for (let index = 1; index < numeros.length; index++) {
   if(max < numeros[index]) {
     max = numeros[index];
   }
  }
  return max;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if(arguments.length === 0) {
    return 0;
  }
  var multiplicacion = 1;
  for (let index = 0; index < arguments.length; index++) {
    multiplicacion = multiplicacion * arguments[index];
  }
  return multiplicacion;
}

function cuentoElementos(arreglo){
  // Realiza una función que retorne la cantidad de los elementos del arreglo que sean mayores a 18.
  // Tu código:
  var m = [];
  for (let index = 0; index < arreglo.length; index++) {
    if(arreglo[index] > 18) {
      m.push(arreglo[index]);
    }
  }
  return m.length;
}

function todosIguales(arreglo) {
  // Escriba la función todosIguales, si todos los elementos de un arreglo son iguales
  // retornar true, caso contrario retornar false.
  // Tu código:
  var todosIguales = [arreglo [0]];
  for (let index = 1; index < arreglo.length; index++) {
    if(todosIguales[0] === arreglo[index]) {
      todosIguales.push(arreglo[index]);
    }
  }
  if(todosIguales.length === arreglo.length) {
    return true;
  } else {
    return false;
  }
} 

function mesesDelAño(array) {
  // Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  // Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses = [];
  for (let index = 0; index < array.length; index++) {
    if(array[index] === "Enero" || array[index] === "Marzo" || array[index] === "Noviembre") {
      meses.push(array[index]);
    }
  } 
  if(meses.length < 3) {
    return "No se encontraron los meses pedidos";
  }
  return meses;
}

function breakStatement(numero) {
  // Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array. 
  // Devolver el array
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  // devolver: "Se interrumpió la ejecución"
  // Pista: usá el statement 'break'
  // Tu código:
var nuevoArr = [];
for (var index = 0; index < 10; index++) {
  numero = numero + 2;
  if(numero === index) {
    break;
  }
  nuevoArr.push(numero);
 }
 if(index < 10) {
   return "Se interrumpió la ejecución";
 }
 return nuevoArr;
}

function continueStatement(numero) {
  // Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array.    
  // Devolver el array
  // Cuando el número de iteraciones alcance el valor 5, no se agrega ese número al array
  // y se continua con la siguiente iteración
  // Pista: usá el statement 'continue'
  // Tu código:
  var nuevoArr = [];
  for (var index = 0; index < 10; index++) {
    numero = numero + 2;
    if(index === 5) {
      continue;
    }
    nuevoArr.push(numero);
  }
  return nuevoArr;  
}

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var gato = {
    nombre: nombre,
    edad: edad,
    meow: function(){ 
      return "Meow!"
    }
  }
  return gato;
}

function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null;
  return objeto;
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  return objetoMisterioso.numeroMisterioso * 5;
}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad];
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var objeto = {
    nombre: nombre,
    email: email,
    password: password,
  }
  return objeto;
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if(usuario.email){
    return true;
  } else {
    return false;
  }
}

function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto tiene el valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if(objeto[propiedad]) {
    return true;
  } else {
    return false;
  }
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword
  return usuario;
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  var totalLikes = 0;
  for (let index = 0; index < usuario.posts.length; index++) {
    totalLikes = totalLikes + usuario.posts[index].likes;
    }
    return totalLikes;
  }

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverUltimoElemento,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  dePalabrasAFrase,
  arrayContiene,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  todosIguales,
  mesesDelAño,
  breakStatement,
  continueStatement,
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  actualizarPassword,
  agregarAmigo,
  sumarLikesDeUsuario
};