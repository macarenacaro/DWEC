let letters = "0123456789ABCDEF";
 
// HTML COLOR comienza #
let color = '#';
for (let i = 0; i < 6; i++) //GENERAR NUMEROS ALEATORIOS
    color += letters[(Math.floor(Math.random() * 16))];
 
document.getElementById("back").style.backgroundColor = color ;