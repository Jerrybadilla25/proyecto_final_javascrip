var calculadora = {

    pantalla: document.getElementById("display"),
    valorpantalla ="0",
    valor1 ="0",
    valor2 ="0",
    ultimoValor ="0",
    resultadoFinal ="0",
    operando="",

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

    borrarPantalla: function(){
        this.valorpantalla="0";
        this.valor1="0";
        this.valor2="0";
        this.resultadoFinal="0";
        this.ultimoValor="0";
        this.actualizarpantalla();
    },


    cambiarSigno: function(){
        if(this.valorpantalla !="0"){
            var salida;
            if(this.valorpantalla.charAt(0)=="0"){
                salida=this.valorpantalla.slice(1);
            } else{
                salida="-"+this.valorpantalla;
            }
            this.valorpantalla="";
            this.valorpantalla="salida";
            this.actualizarpantalla();
        }
    },

    ingresarPunto: function(){
        if(this.valorpantalla.indexOf(".")== -1){
            if(this.valorpantalla == ""){
               this.valorpantalla=this.valorpantalla+"0";              
            }else{
                this.valorpantalla=this.valorpantalla+"-";
            }
            this.actualizarpantalla();
        }
        },
    
    operaciones: function(valor1,valor2,operando){
        switch(operando){
        case "+":this.resultadoFinal=eval(valor1+valor2);break;
        case "-":this.resultadoFinal=eval(valor1-valor2);break;
        case "*":this.resultadoFinal=eval(valor1*valor2);break;
        case "/":this.resultadoFinal=eval(valor1/valor2);break;
    }
    },

    actualizarpantalla: function(){
        this.pantalla.innerHTML=this.valorpantalla;
    }
    
    
    
//pendiente efecto botones

};

calculadora.init();

