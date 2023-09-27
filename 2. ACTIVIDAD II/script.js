/*//***********************EJERCICIO 1
var resultado1 = document.getElementById("ej1"); //PARA SELECCIONAR EL <P> DEL HTML
let num1 = prompt("Ejercicio 1: Digita un número");

//UTILIZANDO CONDICIONAL PARA MODIFICAR HTML
resultado1.innerHTML =  (parseInt(num1) % 2 == 0 ) ? "¡Es Par!" : "¡No es Par!"; 
//IF ELSE PARA ALERT.
if (parseInt(num1) % 2 == 0 ) { alert("¡Es Par!"); }else{ alert("¡No es Par!");};  
    


//***********************EJERCICIO 2
var resultado2 = document.getElementById("ej2"); //PARA SELECCIONAR EL <P> DEL HTML
let city = prompt("Ejercicio 2 :¿Dónde vives?");
let age = prompt("¿Cuál es tu edad?");

if( ((city == "Alicante")||(city == "alicante")||(city == "ALICANTE")) && ((parseInt(age)>=18)&&(parseInt(age)<=35))){

    resultado2.innerHTML = "Puede acceder al carnet de empresarios emprendedores :)";
    alert("Puede acceder al carnet de empresarios emprendedores");

} else { resultado2.innerHTML = "No cumples con los requisitos "; 
alert("No cumples con los requisitos");
};


//***********************EJERCICIO 3
var resultado3 = document.getElementById("ej3"); //PARA SELECCIONAR EL <P> DEL HTML
let cantidad = prompt(" Ejercicio 3: Digita una cantidad");
let hrmanos = prompt("¿Cuántos hermanos tienes?");

if (parseInt(hrmanos) >= 3 ){
    let dcto = (cantidad - ((15 * cantidad)/100));
    resultado3.innerHTML = `Son ${hrmanos} hrmanos. Tienes un 15% de descuento!  Valor final es:${cantidad}-15% = ${dcto} `; 
    alert(`Son ${hrmanos} hrmanos. Tienes un 15% de descuento!  Valor final es:${cantidad}-15% = ${dcto} `);
} else if ((parseInt(hrmanos) < 3)&&(parseInt(hrmanos)!=0) ){
    let dcto = (cantidad -(5 * cantidad)/100);
    resultado3.innerHTML = `Son ${hrmanos} hrmanos. Tienes un 5% de descuento!  Valor final es: ${cantidad}-5% = ${dcto} `; 
    alert(`Son ${hrmanos} hrmanos. Tienes un 5% de descuento!  Valor final es: ${cantidad}-5% = ${dcto} `);
}else if ((parseInt(hrmanos) <= 0)) {
    resultado3.innerHTML = `Son ${hrmanos} hrmanos. No tienes descuento! Valor final es:${cantidad} `;
    alert(`Son ${hrmanos} hrmanos. No tienes descuento! Valor final es:${cantidad} `);
};


//***********************EJERCICIO 4
var resultado4 = document.getElementById("ej4"); //PARA SELECCIONAR EL <P> DEL HTML
let mes = prompt(" Ejercicio 4: Digita número de mes (1 a 12)");

switch(parseInt(mes)){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:  resultado4.innerHTML = `Mes ${mes}, Tiene 31 días`; alert(`Mes ${mes}, Tiene 31 días`); break;
    case 2: resultado4.innerHTML = `Mes ${mes}, Tiene 28 días`; alert(`Mes ${mes}, Tiene 28 días`); break;
    case 4:
    case 6:
    case 9:
    case 11: resultado4.innerHTML = `Mes ${mes}, Tiene 30 días`; alert(`Mes ${mes}, Tiene 30 días`); break;
    default: resultado4.innerHTML = `El numero ${mes}, no es válido`; alert(`El numero ${mes}, no es válido`); break;
}

//***********************EJERCICIO 5
var resultado5 = document.getElementById("ej5"); //PARA SELECCIONAR EL <P> DEL HTML
let num2 = prompt("Ejercicio 5: Digita un número");
let resp5 = `El número ${num2} `;

//IF ELSE PARA ALERT.
if (parseInt(num2) % 2 == 0 ) { resp5 = resp5 + "es par"} else{resp5 = resp5 + "es impar"}
if (parseInt(num2) % 3 == 0 ) { resp5 = resp5 + ", es múltiplo de 3"} 
if (parseInt(num2) % 5 == 0 ) { resp5 = resp5 + ", es múltiplo de 5"}

    
    //MOSTRANDO EL RESULTADO
    alert(resp5);  
    resultado5.innerHTML = resp5;


//***********************EJERCICIO 6
var resultado6 = document.getElementById("ej6"); //PARA SELECCIONAR EL <P> DEL HTML
let resp6 = "";
while((resp6 == "")||(resp6 == "Operación no válida")){
    let a = prompt("Ejercicio 6: Digita Primer Número");
    let b = prompt("Digita Segundo Número");
    let operacion = prompt("Digita una operación (+,-,*,/)");
    

    switch(operacion){
    case "+": resp6 = parseInt(a)+parseInt(b); break;
    case "-": resp6 = parseInt(a)-parseInt(b); break;
    case "/": resp6 = parseInt(a)/parseInt(b); break;
    case "*": resp6 = parseInt(a)*parseInt(b) ; break;
    default:  resp6 ="Operación no válida" ; alert(`Operación no válida`); break;
    }
} //HARÁ BUCLE HASTA QUE LA OPERACIÓN SEA CORRECTA

    //MOSTRANDO EL RESULTADO
   // alert(`El Resultado de ${a}${operacion}${b}= ${resp6}`);  
    alert("El Resultado es: "+resp6);
    resultado6.innerHTML = "El Resultado es: "+resp6;



//***********************EJERCICIO 7
var resultado7 = document.getElementById("ej7"); //PARA SELECCIONAR EL <P> DEL HTML
let suma = 0 ;
let numeros = prompt("Ejercicio 7: Digita Número");

while((numeros != parseInt(0)) && (numeros != "")  ){
 
       suma = suma + parseInt(numeros);
       numeros = prompt("Ejercicio 7: Digita Número");
}

alert("La suma total es: "+suma);
resultado7.innerHTML = "La suma total es: "+suma;


//***********************EJERCICIO 8
var resultado8 = document.getElementById("ej8"); //PARA SELECCIONAR EL <P> DEL HTML
let resp8 = "";

for (let i = 25; i>0 ; i --){

    if(i %2==0){
        resp8 = resp8 +" "+i
    }    
}
alert("Los numeros pares entre 25 y 1 son: "+resp8);
resultado8.innerHTML = "Los numeros pares entre 25 y 1 son: "+resp8;


//***********************EJERCICIO 9
var resultado9 = document.getElementById("ej9"); //PARA SELECCIONAR EL <P> DEL HTML
let n = prompt("Ejercicio 9: Digita Número");

if (parseInt(n) < 0) {
    alert("No se puede calcular el factorial de un número negativo");
  } else if (parseInt(n) === 0 || parseInt(n) === 1) {
    factorial == 1;
  } else {
    let factorial = 1;
    let i = 1;

    while (i <= parseInt(n)) {
      factorial *= i;
      i++;
    }
    alert("El Factorial de "+n+" es "+factorial);
    resultado9.innerHTML = "El Factorial de "+n+" es "+factorial;
}
*/


//***********************EJERCICIO 10
var resultado10 = document.getElementById("ej10"); //PARA SELECCIONAR EL <P> DEL HTML
let secret = prompt("Ejercicio 10: Digita Número Para Adivinar");
let intentos = prompt("Adivina el número");

while (parseInt(secret)!=parseInt(intentos)){

    if(parseInt(intentos) > parseInt(secret)){
        alert("El número secreto es MENOR");
    } else {
        alert("El número secreto es MAYOR");
    }

    intentos = prompt("Sigue Adivinando:");
}

alert("Felicidades! Has Adivinado, el número secreto es: "+secret );
resultado10.innerHTML = "Felicidades! Has Adivinado, el número secreto es: "+secret;

