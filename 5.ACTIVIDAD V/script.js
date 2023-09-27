let A = prompt("Digita tu nombre");
document.getElementById("name").innerHTML = A; //PARA SELECCIONAR EL <P> DEL HTML

let B = prompt("Digita tus apellidos");
document.getElementById("surname").innerHTML = B; //PARA SELECCIONAR EL <P> DEL HTML

let salario = prompt("Digita tu salario");

let edad = prompt("Digita tu edad");
document.getElementById("age").innerHTML = edad; //PARA SELECCIONAR EL <P> DEL HTML


/*- Si el salario es mayor de 2000 €, no cambiará
-Si el salario está entre 1000 y 2000:
    Si además la edad es mayor de 45 años, se sube un 3%
    Si la edad es menor de 45 o igual, se sube un 10%
-Si el salario indicado es menor de 1000
    Los menores de 30 años cobrarán exactamente 1100 €
    Si la edad es de 30 a 45 años, el salario sube un 3%
    A los mayores de 45 años, sube un 15%*/

if (parseInt(salario)>2000){
    document.getElementById("salary").innerHTML = salario+" €"; //SERÁ EL MISMO
}else if (parseInt(salario)>=1000 && parseInt(salario)<=2000){

    if (parseInt(edad)>45){ 
        let aumento = parseInt(salario) + (3 * parseInt(salario))/100; //sube 3%
        document.getElementById("salary").innerHTML = "Tu salario es:"+ salario+" €, has recibido un aumento del 3%, salario final: "+aumento+" €";
    }else if(parseInt(edad)<=45){
        let aumento = parseInt(salario) + (10 * parseInt(salario))/100; //sube 10%
        document.getElementById("salary").innerHTML = "Tu salario es:"+ salario+" €, has recibido un aumento del 10%, salario final: "+aumento+" €";
    } ;

} else if (parseInt(salario)<1000){
    if (parseInt(edad)<30){ 
        document.getElementById("salary").innerHTML = "Tu saldo es fijo de : 1100 €"; //SERÁ EL MISMO
    }else if(parseInt(edad)<=45 && parseInt(edad)>=30){
        let aumento = parseInt(salario) + (3 * parseInt(salario))/100; //sube 3%
        document.getElementById("salary").innerHTML = `Tu salario es: ${salario} €, has recibido un aumento del 3%, salario final:${aumento} €`;
    }else if(parseInt(edad)>45){
        let aumento = parseInt(salario) + (15 * parseInt(salario))/100; //sube 15%
        document.getElementById("salary").innerHTML = `Tu salario es: ${salario} €, has recibido un aumento del 15%, salario final:${aumento} €`;
    }

}