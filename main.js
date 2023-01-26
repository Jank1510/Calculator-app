let identificador1 = ""
let identificador2 = "x"
let identificador3 = ""
function temas() {
    //elementos por id
    var btn1 = document.getElementById("tema1")
    var btn2 = document.getElementById("tema2")
    var btn3 = document.getElementById("tema3")
    var entrada = document.getElementById("Entrada")
    var contenedorBTN = document.getElementById("contenedorBTN")
    var padre = document.getElementById("padre")
    var operaciones = document.getElementById("Operaciones")
    var cabezera = document.getElementById("Cabezera")
    //elementos po clases
    var BtnCalculadora = document.getElementsByClassName("btnCal")
    var shadowDelReset = document.getElementsByClassName("shadowDelReset")
    var resultado = document.getElementById("resultado")
    var pantalla = document.getElementById("numerosP")



    if (identificador1 === "x") {
        pantalla.style.color = "white"
        padre.style.backgroundColor = "hsl(222, 26%, 31%)"
        operaciones.style.backgroundColor = "hsl(223, 31%, 20%)"
        contenedorBTN.style.backgroundColor = "hsl(223, 31%, 20%)"
        btn1.style.backgroundColor = "hsl(6, 63%, 50%)"
        btn2.style.backgroundColor = "hsl(223, 31%, 20%)"
        btn3.style.backgroundColor = "hsl(223, 31%, 20%)"
        entrada.style.backgroundColor = "hsl(224, 36%, 15%)"
        cabezera.style.color = "white"

        var cssbtnCal = "box-shadow: 0px 6px 0px 0px hsl(28, 16%, 65%);background-color:hsl(30, 25%, 89%);color:hsl(221, 14%, 31%)"
        var cssShadowDelRes = "box-shadow: 0px 6px 0px 0px  hsl(224, 28%, 35%);background-color:hsl(225, 21%, 49%)"
        for (var i = 0; i < BtnCalculadora.length; i++) {
            BtnCalculadora[i].style.cssText = cssbtnCal;
        }
        for (var i = 0; i < shadowDelReset.length; i++) {
            shadowDelReset[i].style.cssText = cssShadowDelRes;

        }
        var cssresultado = "box-shadow: 0px 6px 0px 0px hsl(6, 70%, 34%);background-color:hsl(6, 63%, 50%)"
        resultado.style.cssText = cssresultado
        console.log("entro1")
        identificador1 = ""
        identificador2 = "x"
    } else {
        if (identificador2 === "x") {
            pantalla.style.color = "hsl(60, 10%, 19%)"

            padre.style.backgroundColor = "hsl(0, 0%, 90%)"
            operaciones.style.backgroundColor = "hsl(0, 5%, 81%)"
            contenedorBTN.style.backgroundColor = "hsl(0, 5%, 81%)"
            btn1.style.backgroundColor = "hsl(0, 5%, 81%)"
            btn2.style.backgroundColor = "hsl(25, 98%, 40%)"
            btn3.style.backgroundColor = "hsl(0, 5%, 81%)"
            entrada.style.backgroundColor = "hsl(0, 0%, 93%)"
            cabezera.style.color = "hsl(60, 10%, 19%)"
            var cssbtnCal = "box-shadow: 0px 6px 0px 0px hsl(35, 11%, 61%);background-color:hsl(45, 7%, 89%);color:hsl(60, 10%, 19%)"
            var cssShadowDelRes = "box-shadow: 0px 6px 0px 0px  hsl(185, 58%, 25%);background-color:hsl(185, 42%, 37%)"
            for (var i = 0; i < BtnCalculadora.length; i++) {
                BtnCalculadora[i].style.cssText = cssbtnCal;
            }
            for (var i = 0; i < shadowDelReset.length; i++) {
                shadowDelReset[i].style.cssText = cssShadowDelRes;

            }
            var cssresultado = "box-shadow: 0px 6px 0px 0px hsl(25, 99%, 27%);background-color:hsl(25, 98%, 40%)"
            resultado.style.cssText = cssresultado
            console.log("entro2")
            identificador2 = ""
            identificador3 = "x"
        } else {
            if (identificador3 === "x") {
                pantalla.style.color = "hsl(52, 100%, 62%)"

                padre.style.backgroundColor = " hsl(268, 75%, 9%)"
                operaciones.style.backgroundColor = "hsl(268, 71%, 12%)"
                contenedorBTN.style.backgroundColor = "hsl(268, 71%, 12%)"
                btn1.style.backgroundColor = "hsl(268, 71%, 12%)"
                btn2.style.backgroundColor = "hsl(268, 71%, 12%)"
                btn3.style.backgroundColor = "hsl(176, 100%, 44%)"
                entrada.style.backgroundColor = "hsl(268, 71%, 12%)"
                cabezera.style.color = "hsl(52, 100%, 62%)"
                var cssbtnCal = "box-shadow: 0px 6px 0px 0px hsl(290, 70%, 36%);background-color:hsl(268, 47%, 21%);color:hsl(52, 100%, 62%)"
                var cssShadowDelRes = "box-shadow: 0px 6px 0px 0px hsl(285, 91%, 52%);background-color:hsl(281, 89%, 26%)"
                for (var i = 0; i < BtnCalculadora.length; i++) {
                    BtnCalculadora[i].style.cssText = cssbtnCal;
                }
                for (var i = 0; i < shadowDelReset.length; i++) {
                    shadowDelReset[i].style.backgroundColor = "";
                    shadowDelReset[i].style.cssText = cssShadowDelRes;

                }
                var cssresultado = "box-shadow: 0px 6px 0px 0px hsl(177, 92%, 70%);background-color: hsl(176, 100%, 44%);color:hsl(198, 20%, 13%)"
                resultado.style.cssText = cssresultado
                console.log("entro3")
                identificador3 = ""
                identificador1 = "x"
            }
        }
    }
}
var numeros = []
function redimencionNum() {
}
let condiciondoperadorsincontrol//variable para que no se opere cuando se preciona varias veces un operador si no que se realice una sola vez hasta oprimir otro numero
let valores = (numero) => {//funcion que imprime los valores en pantalla
    condiciondoperadorsincontrol = true
    var pantalla = document.getElementById("numerosP")
    if (numeros.length < 14) {
        numeros.push(numero)
    }
    var numeroArray = numeros.toString().replace(/,/g, "")
    pantalla.innerHTML = numeroArray
}
//funciones de los valores precionados
function cero() {
    redimencionNum()
    valores(0)
}
function uno() {
    redimencionNum()
    valores(1)
}
function dos() {
    redimencionNum()
    valores(2)
}
function tres() {
    redimencionNum()
    valores(3)
}
function cuatro() {
    redimencionNum()
    valores(4)
}
function cinco() {
    redimencionNum()
    valores(5)
}
function seis() {
    redimencionNum()
    valores(6)
}
function siete() {
    redimencionNum()
    valores(7)
}
function ocho() {
    redimencionNum()
    valores(8)
}
function nueve() {
    redimencionNum()
    valores(9)
}
function punto() {
    valores('.')
}

let numerosingresados = []//arreglo que almacena los datos que se operan
let resultadelosdosnumeros
let operadorPendiente = ''//string que almacena que operador es seleccionado
let operacion = (tipoOperacion) => {//funcion que condiciona el operador seleccionado
    let numerodigitado = parseFloat(document.getElementById("numerosP").innerText)
    numerosingresados.push(numerodigitado)
    numeros = []
    switch (tipoOperacion) {
        case '+':
            operacionPendiente()
            operadorPendiente = '+'
            break
        case '-':
            operacionPendiente()
            operadorPendiente = '-'
            break
        case '*':
            operacionPendiente()
            operadorPendiente = '*'
            break
        case '/':
            operacionPendiente()
            operadorPendiente = '/'
            break
    }
    document.getElementById("numerosP").innerHTML = (numerosingresados)
}
let operacionPendiente = () => {//funcion que realiza los calculos dependiendo de la var operadorpendiente
    if (operadorPendiente == '+') {
        numerosingresados = [numerosingresados[0] + numerosingresados[1]]
    } else {
        if (operadorPendiente == '-') {
            numerosingresados = [numerosingresados[0] - numerosingresados[1]]
        } else {
            if (operadorPendiente == '*') {
                numerosingresados = [numerosingresados[0] * numerosingresados[1]]
            } else {
                if (operadorPendiente == '/') {
                    numerosingresados = [numerosingresados[0] / numerosingresados[1]]
                }
            }
        }
    }
}
//funciones que llevan la logica de los procesos de datos 
function suma() {
    if (operadorPendiente != '+' || condiciondoperadorsincontrol == true) {
        operacion('+')
        condiciondoperadorsincontrol = false
    }
}
function resta() {
    if (operadorPendiente != '-' || condiciondoperadorsincontrol == true) {
        operacion('-')
        condiciondoperadorsincontrol = false
    }
}
function multiplicacion() {
    if (operadorPendiente != '*' || condiciondoperadorsincontrol == true) {
        operacion('*')
        condiciondoperadorsincontrol = false
    }
}
function dividir() {
    if (operadorPendiente != '/' || condiciondoperadorsincontrol == true) {
        operacion('/')
        condiciondoperadorsincontrol = false
    }
}
function del() {//funcion para eliminar el ultimo digito
    let numerosEnPantalla = document.getElementById("numerosP").innerText
    document.getElementById("numerosP").innerHTML = numerosEnPantalla.slice(0, -1);
    numeros.pop()
}

let resultado = () => {
    operacionPendiente()
    document.getElementById("numerosP").innerHTML = (numerosingresados)

}
function reset() {
}
