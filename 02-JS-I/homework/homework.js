// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'holas 1';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 5;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
   //Tu codigo:
   str ="hola";document.write(str);
  
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  x=1;y=2;suma=x+y;document.write(suma);
  
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  x=1; y=2;resta=y-x;document.write(resta);
  
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  x=1; y=2;multiplicacion=x*y;document.write(multiplicacion);
  
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  x=10; y=2; division=x/y;document.write(division);
  
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  x=2;
  y=2;
  if(x==y){
      soniguales="true"

  } else
  {
      soniguales="false"
  }  
  
  document.write(soniguales);
  
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
    x="hola";
    y="hola";
    x1=x.length;
    y2=y.length;
    if(x1==y2){
        longitud="true"

    } else
    {
        longitud="false"
    }  
    
    document.write(longitud);
  
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  x=80;
    if(x<90){
        num="true"

    } else
    {
        num="false"
    }  
    
    document.write(num);
  
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  x=40;
    if(x>50){
        num="true"

    } else
    {
        num="false"
    }  
    
    document.write(num);
  
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  x=12;
    y=5;
    num=x%y;
    document.write(num);
  
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  x=10;
    if(x%2==0){
        num="true"

    } else
    {
        num="false"
    }  
    
    document.write(num);
  
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  x=10;
    if(x%2==1){
        num="true"

    } else
    {
        num="false"
    }  
    
    document.write(num);
  
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var x=11; 
   var num=Math.pow(x,2);
    
    document.write(num);
  
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var x=11; 
   var num=Math.pow(x,3);
    
    document.write(num);
  
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var num=11;
   var exponente=2;
   var num=Math.pow(num,exponente);
    
    document.write(num);
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var x=11.51;
   var num=Math.round(x);
   document.write(num);
  
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var x=11.51;
   var num=Math.round(x);
   document.write(num);
  
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var num=Math.random();
   document.write(num);
  
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  var numero=0;
  var num=Math.sign(numero);
  if(num==0){
    num="false";
    document.write(num);  
 }else{
    if(num==-1){
     num="negativo";
    document.write(num);
    }
    else
    {
    num="positivo";
    document.write(num); 
    }    
 }
  
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  str="hola";
   document.write(str+"!");
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  nombre="marlon";
   apellido="cosme";
   document.write(nombre+" "+apellido);
  
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  nombre="marlon";
   document.write("hola"+" "+nombre+" "+"!");
  
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var alto=3;
   var ancho=6;
   var area= alto*ancho;
   document.write(area);
  
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var lado=3;
   var perimetro= lado*4;
   document.write(perimetro);
  
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var base=3;
  var altura=5;
  var area= (base*altura)/2;
  document.write(area);

}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var equivalente=1.20;
  var totaleuro=5;
  var cambio= (equivalente*totaleuro);
  document.write(cambio);
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  letra="i";
  caracteres=letra.length;
  if(caracteres==1){
  if(letra == 'a' || letra== 'e' || letra == 'i' || letra== 'o'|| letra == 'u'){
   document.write("es vocal");
  }else{
   document.write("dato incorrecto es una consonante");
  }
}else{
   document.write("dato incorrecto ingresastes mas caracteres");  
} 
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
