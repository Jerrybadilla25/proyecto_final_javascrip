var calculadora = {

    pantalla: document.getElementById("display"),
    valorpantalla ="0",
    valor1 ="0",
    valor2 ="0",
    ultimoValor ="0",
    resultadoFinal ="0",

    init: (function(){
        this.eventosFunciones();
    }),


    eventosFunciones: (){
        document.getElementById("0").addEventListener("click", function(){calculadora.ingresoNumero("0"),});
        document.getElementById("1").addEventListener("click", function(){calculadora.ingresoNumero("1"),});
        document.getElementById("2").addEventListener("click", function(){calculadora.ingresoNumero("2"),});
        document.getElementById("3").addEventListener("click", function(){calculadora.ingresoNumero("3"),});
        document.getElementById("4").addEventListener("click", function(){calculadora.ingresoNumero("4"),});
        document.getElementById("5").addEventListener("click", function(){calculadora.ingresoNumero("5"),});
        document.getElementById("6").addEventListener("click", function(){calculadora.ingresoNumero("6"),});
        document.getElementById("7").addEventListener("click", function(){calculadora.ingresoNumero("7"),});
        document.getElementById("8").addEventListener("click", function(){calculadora.ingresoNumero("8"),});
        document.getElementById("9").addEventListener("click", function(){calculadora.ingresoNumero("9"),});
        document.getElementById("on").addEventListener("click", function(){calculadora.borrarPantalla(),});
        document.getElementById("sign").addEventListener("click", function(){calculadora.cambiarSigno(),});
        document.getElementById("punto").addEventListener("click", function(){calculadora.ingresarPunto(),});
        document.getElementById("igual").addEventListener("click", function(){calculadora.verResultado(),});
        document.getElementById("dividido").addEventListener("click", function(){calculadora.operaciones("/"),});
        document.getElementById("por").addEventListener("click", function(){calculadora.operaciones("*"),});
        document.getElementById("menos").addEventListener("click", function(){calculadora.operaciones("-"),});
        document.getElementById("mas").addEventListener("click", function(){calculadora.operaciones("+"),});
    },

    ingresoNumero: function(valor){
        if (this.valorpantalla.length < 8){
            this.valorpantalla="0";
            this.valorpantalla=this.valorpantalla+valor;
        }else{
            this.valorpantalla=this.valorpantalla+valor;
        }

        this.actualizarpantalla();
    },

    












}

