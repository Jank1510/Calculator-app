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



    if (identificador1 === "x") {
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
var numerosEnOperacionSuma = []
var numerosEnOperacionResta = []
var numerosEnOperacionMultiplicacion = []
var numero1 = 0
var identificadorOperacion = ""
var resultadoFinal

function redimencionNum() {

    var pantalla = document.getElementById("numerosP")
    var contenido = document.getElementById("Contenido")
    var pixelesNum = parseInt(pantalla.offsetWidth)

    if (contenido.offsetWidth != 650) {
    } else {
        if (pantalla.offsetWidth > 600) {
            console.log("aqui " + (pixelesNum - 650) + " " + pixelesNum)
            pantalla.style.fontSize = "10vh"
        }
    }
}
function cero() {
    redimencionNum()
    var pantalla = document.getElementById("numerosP")
    var contenido = document.getElementById("Contenido")
    if (numeros.length < 11) {
        numeros.push(0)
    }
    var numeroArray = numeros.toString().replace(/,/g, "")
    pantalla.innerHTML = numeroArray
}
function uno() {
    redimencionNum()
    var pantalla = document.getElementById("numerosP")
    var contenido = document.getElementById("Contenido")
    if (numeros.length < 11) {
        numeros.push(1)
    }
    var numeroArray = numeros.toString().replace(/,/g, "")
    pantalla.innerHTML = numeroArray
}
function dos() {
    redimencionNum()
    var pantalla = document.getElementById("numerosP")
    var contenido = document.getElementById("Contenido")
    if (numeros.length < 11) {
        numeros.push(2)
    }
    var numeroArray = numeros.toString().replace(/,/g, "")
    pantalla.innerHTML = numeroArray
}
function tres() {
    redimencionNum()
    var pantalla = document.getElementById("numerosP")
    var contenido = document.getElementById("Contenido")
    if (numeros.length < 11) {
        numeros.push(3)
    }
    var numeroArray = numeros.toString().replace(/,/g, "")
    pantalla.innerHTML = numeroArray
}
function cuatro() {
    redimencionNum()
    var pantalla = document.getElementById("numerosP")
    var contenido = document.getElementById("Contenido")
    if (numeros.length < 11) {
        numeros.push(4)
    }
    var numeroArray = numeros.toString().replace(/,/g, "")
    pantalla.innerHTML = numeroArray
}
function cinco() {
    redimencionNum()
    var pantalla = document.getElementById("numerosP")
    var contenido = document.getElementById("Contenido")
    if (numeros.length < 11) {
        numeros.push(5)
    }
    var numeroArray = numeros.toString().replace(/,/g, "")
    pantalla.innerHTML = numeroArray
}
function seis() {
    redimencionNum()
    var pantalla = document.getElementById("numerosP")
    var contenido = document.getElementById("Contenido")
    if (numeros.length < 11) {
        numeros.push(6)
    }
    var numeroArray = numeros.toString().replace(/,/g, "")
    pantalla.innerHTML = numeroArray
}
function siete() {
    redimencionNum()
    var pantalla = document.getElementById("numerosP")
    var contenido = document.getElementById("Contenido")
    if (numeros.length < 11) {
        numeros.push(7)
    }
    var numeroArray = numeros.toString().replace(/,/g, "")
    pantalla.innerHTML = numeroArray
}
function ocho() {
    redimencionNum()
    var pantalla = document.getElementById("numerosP")
    var contenido = document.getElementById("Contenido")
    if (numeros.length < 11) {
        numeros.push(8)
    }
    var numeroArray = numeros.toString().replace(/,/g, "")
    pantalla.innerHTML = numeroArray
}
function nueve() {
    redimencionNum()
    var pantalla = document.getElementById("numerosP")
    var contenido = document.getElementById("Contenido")
    if (numeros.length < 11) {
        numeros.push(9)
    }
    var numeroArray = numeros.toString().replace(/,/g, "")
    pantalla.innerHTML = numeroArray
}

function suma() {
    redimencionNum()
    if (identificadorOperacion === "-") {
        numerosEnOperacionSuma = []
        resta()
    } else {
        if (identificadorOperacion === "*") {
            numerosEnOperacionSuma = []
            multiplicacion()
        }
    }
    var pantallacontenido = document.getElementById("numerosP").textContent;
    var pantalla = document.getElementById("numerosP")

    numero1 = parseInt(pantallacontenido)
    numeros = []
    if (numero1 != 0) {
        numerosEnOperacionSuma.push(numero1)
        resultadoFinal = numerosEnOperacionSuma.reduce((a, b) => a + b, 0);
        pantalla.innerHTML = resultadoFinal
        console.log(resultadoFinal)
    }
    identificadorOperacion = "+"
}
function resta() {
    redimencionNum()
    if (identificadorOperacion === "+") {
        numerosEnOperacionResta = []
        suma()
    } else {
        if (identificadorOperacion === "*") {
            numerosEnOperacionResta = []
            multiplicacion()
        }
    }

    var pantallacontenido = document.getElementById("numerosP").textContent;
    var pantalla = document.getElementById("numerosP")

    numero1 = parseInt(pantallacontenido)
    numeros = []
    if (numero1 != 0) {
        numerosEnOperacionResta.push(numero1)
        console.log(numerosEnOperacionResta)
        if (numerosEnOperacionResta.length === 2) {
            resultadoFinal = numerosEnOperacionResta[0] - numerosEnOperacionResta[1]
            pantalla.innerHTML = resultadoFinal
            numerosEnOperacionResta = []
            numerosEnOperacionResta.push(resultadoFinal)

        }
    }
    identificadorOperacion = "-"
}
function multiplicacion() {
    redimencionNum()
    if (identificadorOperacion === "-") {
        numerosEnOperacionMultiplicacion = []
        resta()
    } else {
        if (identificadorOperacion === "+") {
            numerosEnOperacionMultiplicacion = []
            suma()
        }
    }
    var pantallacontenido = document.getElementById("numerosP").textContent;
    var pantalla = document.getElementById("numerosP")

    numero1 = parseInt(pantallacontenido)
    numeros = []
    if (numero1 != 0) {
        numerosEnOperacionMultiplicacion.push(numero1)
        console.log(numerosEnOperacionMultiplicacion)
        if (numerosEnOperacionMultiplicacion.length === 2) {
            resultadoFinal = numerosEnOperacionMultiplicacion[0] * numerosEnOperacionMultiplicacion[1]
            pantalla.innerHTML = resultadoFinal
            numerosEnOperacionMultiplicacion = []
            numerosEnOperacionMultiplicacion.push(resultadoFinal)

        }
    }
    identificadorOperacion = "*"
}
function dividir() {

}
function punto() {

}
function del() {

}
function resultado() {
    redimencionNum()
    var pantallacontenido = document.getElementById("numerosP").textContent;
    var pantalla = document.getElementById("numerosP");

    if (identificadorOperacion === "+") {
        suma()
    } else {
        if (identificadorOperacion === "-") {
            resta()
        }else{
            if(identificadorOperacion==="*"){
                multiplicacion()
            }
        }
    }


    pantalla.innerHTML = resultadoFinal
    numeros = []
    numerosEnOperacionResta = []
    numerosEnOperacionSuma = []
    numerosEnOperacionMultiplicacion=[]
    numero1 = 0
    numero2 = 0

}
//////////