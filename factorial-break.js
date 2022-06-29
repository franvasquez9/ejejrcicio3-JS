var num = 10;
var resultado = num;
var i = 1;

while (i < num) {
    resultado = resultado * i;
    i++;
    if(i == 10){
        break;
    }
    
}
console.log(resultado);