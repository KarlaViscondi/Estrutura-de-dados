function filaconsole(){

    var fila = [];
    var x;

    //x = parseInt(prompt("Informe um número")) //se for usar como HTML

    x = 7

    fila.push(x);
    fila.push(1);
    fila.push(2);

    console.log("Fila: " + fila);

    x = fila.shift();
    console.log("Elemento: " + x);
    console.log("Fila: " + fila);


}
 filaconsole()