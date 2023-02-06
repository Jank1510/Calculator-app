let numeros = []
let condiciondoperadorsincontrol//variable para que no se opere cuando se preciona varias veces un operador si no que se realice una sola vez hasta oprimir otro numero
let valores = (numero) => {//funcion que imprime los valores en pantalla 
    isbignumber = false
    condiciondoperadorsincontrol = true
    let pantalla = document.getElementById("numerosP")
    if (numeros.length < 15) {//limita el numeros en pantalla q se pueden poner
        numeros.push(numero)
    }
    let numeroArray = numeros.toString().replace(/,/g, "")//convierte de lista a string
    redimencionnumeros(numeroArray.toString())//redimenciona el tamaño de los numeros
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
    redimencionnumeros(numerosIngresados.toString())//redimenciona el tamaño de los numeros
    if (isbignumber != true) {
        document.getElementById("numerosP").innerHTML = (numerosIngresados)

    } else {
        document.getElementById("numerosP").innerHTML = (parseFloat(numerosIngresados).toExponential((1)))//cuando la exprecion pasa el limite de numeors q se puedne mostrar se convierte en numeros exponenciales
    }
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
    redimencionnumeros(numerosEnPantalla.slice(0, -1))//redimenciona el tamaño de los numeros
    document.getElementById("numerosP").innerHTML = numerosEnPantalla.slice(0, -1);//elimina el ultimo digito
    numeros.pop()//elimina el  ultimo numero de la cadena
}
let resultado = () => {
    if (document.getElementById("numerosP").innerText != '') {
        operacion(operadorPendiente)
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

document.addEventListener("keydown", function (event) {
    console.log(event.key)

    switch (event.key) {
        case '1':
            valores(1);
            document.getElementById(1).className = 'push btnCal'
            break
        case '2':
            document.getElementById(2).className = 'push btnCal'
            valores(2);
            break
        case '3':
            document.getElementById(3).className = 'push btnCal'
            valores(3);
            break
        case '4':
            document.getElementById(4).className = 'push btnCal'
            valores(4);
            break
        case '5':
            document.getElementById(5).className = 'push btnCal'
            valores(5);
            break
        case '6':
            document.getElementById(6).className = 'push btnCal'
            valores(6);
            break
        case '7':
            document.getElementById(7).className = 'push btnCal'
            valores(7);
            break
        case '8':
            document.getElementById(8).className = 'push btnCal'
            valores(8);
            break
        case '9':
            document.getElementById(9).className = 'push btnCal'
            valores(9);
            break
        case '0':
            document.getElementById(0).className = 'push btnCal'
            valores(0);
            break
        case 'Backspace':
            document.getElementById('DEL').className = 'push btnCal'
            del()
            break
        case '+':
            document.getElementById('+').className = 'push btnCal'
            suma()
            break
        case '-':
            document.getElementById('-').className = 'push btnCal'
            resta()
            break
        case '/':
            document.getElementById('/').className = 'push btnCal'
            dividir()
            break
        case '*':
            document.getElementById('x').className = 'push btnCal'
            multiplicacion()
            break
        case 'Enter':
            document.getElementById('resultado').className = 'push btnCal'
            resultado()
            break
        case 'Escape':
            document.getElementById('RESET').className = 'push btnCal'
            reset()
            break
        case '.':
            document.getElementById('.').className = 'push btnCal'
            valores('.')
            break
    }
})
document.addEventListener("keyup", function (event) {
    switch (event.key) {
        case '1':
            document.getElementById(1).className = 'nopush btnCal'
            break
        case '2':
            document.getElementById(2).className = 'nopush btnCal'
            break
        case '3':
            document.getElementById(3).className = 'nopush btnCal'
            break
        case '4':
            document.getElementById(4).className = 'nopush btnCal'
            break
        case '5':
            document.getElementById(5).className = 'nopush btnCal'
            break
        case '6':
            document.getElementById(6).className = 'nopush btnCal'
            break
        case '7':
            document.getElementById(7).className = 'nopush btnCal'
            break
        case '8':
            document.getElementById(8).className = 'nopush btnCal'
            break
        case '9':
            document.getElementById(9).className = 'nopush btnCal'
            break
        case '0':
            document.getElementById(0).className = 'nopush btnCal'
            break
        case 'Backspace':
            document.getElementById('DEL').className = 'nopush btnCal' 
            break
        case '+':
            document.getElementById('+').className = 'nopush btnCal' 
            break
        case '-':
            document.getElementById('-').className = 'nopush btnCal' 
            break
        case '/':
            document.getElementById('/').className = 'nopush btnCal' 
            break
        case '*':
            document.getElementById('x').className = 'nopush btnCal' 
            break
        case 'Enter':
            document.getElementById('resultado').className = 'nopush btnCal' 
            break
        case 'Escape':
            document.getElementById('RESET').className = 'nopush btnCal' 
            break
        case '.':
            document.getElementById('.').className = 'nopush btnCal' 
            break
    }
})