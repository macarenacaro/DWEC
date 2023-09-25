/*//EJERCICIO 1
var resultado1 = document.getElementById("ej1"); //PARA SELECCIONAR EL <P> DEL HTML
let num1 = prompt("Ejercicio 1: Digita un número");

//UTILIZANDO CONDICIONAL PARA MODIFICAR HTML
resultado1.innerHTML =  (parseInt(num1) % 2 == 0 ) ? "¡Es Par!" : "¡No es Par!"; 
//IF ELSE PARA ALERT.
if (parseInt(num1) % 2 == 0 ) { alert("¡Es Par!"); }else{ alert("¡No es Par!");};  
    


//EJERCICIO 2
var resultado2 = document.getElementById("ej2"); //PARA SELECCIONAR EL <P> DEL HTML
let city = prompt("Ejercicio 2 :¿Dónde vives?");
let age = prompt("¿Cuál es tu edad?");

if( ((city == "Alicante")||(city == "alicante")||(city == "ALICANTE")) && ((parseInt(age)>=18)&&(parseInt(age)<=35))){

    resultado2.innerHTML = "Puede acceder al carnet de empresarios emprendedores :)";
    alert("Puede acceder al carnet de empresarios emprendedores");

} else { resultado2.innerHTML = "No cumples con los requisitos "; 
alert("No cumples con los requisitos");
};


//EJERCICIO 3
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


//EJERCICIO 4
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
}*/

//EJERCICIO 5
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
