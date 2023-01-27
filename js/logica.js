let numeros = [] 
let condiciondoperadorsincontrol//variable para que no se opere cuando se preciona varias veces un operador si no que se realice una sola vez hasta oprimir otro numero
let valores = (numero) => {//funcion que imprime los valores en pantalla
    condiciondoperadorsincontrol = true
    let pantalla = document.getElementById("numerosP")
    if (numeros.length < 17) {
        numeros.push(numero)
    }
    let numeroArray = numeros.toString().replace(/,/g, "")
    pantalla.innerHTML = numeroArray
}
let numerosIngresados = []//arreglo que almacena los datos que se operan
let resultadelosdosnumeros
let operadorPendiente = ''//string que almacena que operador es seleccionado

let operacion = (tipoOperacion) => {//funcion que condiciona el operador seleccionado
    let numerodigitado = parseFloat(document.getElementById("numerosP").innerText)
    numerosIngresados.push(numerodigitado)
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
    redimencionPresionarOperacion(numerosIngresados.toString())
    document.getElementById("numerosP").innerHTML = (numerosIngresados)
}
let operacionPendiente = () => {//funcion que realiza los calculos dependiendo de la var operadorpendiente
    if (operadorPendiente == '+') {
        numerosIngresados = [numerosIngresados[0] + numerosIngresados[1]]

    } else {
        if (operadorPendiente == '-') {
            numerosIngresados = [numerosIngresados[0] - numerosIngresados[1]]

        } else {
            if (operadorPendiente == '*') {
                numerosIngresados = [numerosIngresados[0] * numerosIngresados[1]]

            } else {
                if (operadorPendiente == '/') {
                    numerosIngresados = [numerosIngresados[0] / numerosIngresados[1]]

                }
            }
        }
    }
}
//funciones que llevan la logica de los procesos de datos 
function suma() {
    if ((operadorPendiente != '+' || condiciondoperadorsincontrol == true) && document.getElementById("numerosP").innerText != '') {
        operacion('+')
        condiciondoperadorsincontrol = false
    }
}
function resta() {
    if ((operadorPendiente != '-' || condiciondoperadorsincontrol == true) && document.getElementById("numerosP").innerText != '') {
        operacion('-')
        condiciondoperadorsincontrol = false
    }
}
function multiplicacion() {
    if ((operadorPendiente != '*' || condiciondoperadorsincontrol == true) && document.getElementById("numerosP").innerText != '') {
        operacion('*')
        condiciondoperadorsincontrol = false
    }
}
function dividir() {
    if ((operadorPendiente != '/' || condiciondoperadorsincontrol == true) && document.getElementById("numerosP").innerText != '') {
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
    if (document.getElementById("numerosP").innerText != '') {
        operacion(operadorPendiente)
        document.getElementById("numerosP").innerHTML = (numerosIngresados)
        numerosIngresados.pop()
        operadorPendiente = ''
    }
}
function reset() {
    operadorPendiente = ''
    numerosIngresados = []
    resultadelosdosnumeros
    operadorPendiente = ''
    document.getElementById("numerosP").innerHTML = ''
    numeros = []

}