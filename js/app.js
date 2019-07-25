var a;
var b;
var c;


funtion calculadora(){
    var on = document.getElementById("on");   
    var uno = document.getElementById("1");
    var dos = document.getElementById("2");
    var tres = document.getElementById("3");
    var cuatro = document.getElementById("4");
    var cinco = document.getElementById("5");
    var seis = document.getElementById("6");
    var siete = document.getElementById("7");
    var ocho = document.getElementById("8");
    var nueve = document.getElementById("9");
    var cero = document.getElementById("0");
    var punto = document.getElementById("punto");
    var igual = document.getElementById("igual");
    var menos = document.getElementById("menos");
    var por = document.getElementById("por");
    var dividido = document.getElementById("dividido");
    var display = document.getElementById("display");
}

uno.onclick = funtion(e){
    display.textcontent = display.textcontent + "1";
}