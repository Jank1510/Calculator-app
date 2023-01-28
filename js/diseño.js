let tema = 2;
function temas() {
    //elementos por id
    let btn1 = document.getElementById("tema1")
    let btn2 = document.getElementById("tema2")
    let btn3 = document.getElementById("tema3")
    let entrada = document.getElementById("Entrada")
    let contenedorBTN = document.getElementById("contenedorBTN")
    let padre = document.getElementById("padre")
    let operaciones = document.getElementById("Operaciones")
    let cabezera = document.getElementById("Cabezera")
    //elementos po clases
    let BtnCalculadora = document.getElementsByClassName("btnCal")
    let shadowDelReset = document.getElementsByClassName("shadowDelReset")
    let resultado = document.getElementById("resultado")
    let pantalla = document.getElementById("numerosP")

    if (tema === 1) {
        pantalla.style.color = "white"
        padre.style.backgroundColor = "hsl(222, 26%, 31%)"
        operaciones.style.backgroundColor = "hsl(223, 31%, 20%)"
        contenedorBTN.style.backgroundColor = "hsl(223, 31%, 20%)"
        btn1.style.backgroundColor = "hsl(6, 63%, 50%)"
        btn2.style.backgroundColor = "hsl(223, 31%, 20%)"
        btn3.style.backgroundColor = "hsl(223, 31%, 20%)"
        entrada.style.backgroundColor = "hsl(224, 36%, 15%)"
        cabezera.style.color = "white"
        let cssbtnCal = "box-shadow: 0px 0.4vw 0px 0px hsl(28, 16%, 65%);background-color:hsl(30, 25%, 89%);color:hsl(221, 14%, 31%)"
        let cssShadowDelRes = "box-shadow: 0px 0.4vw 0px 0px  hsl(224, 28%, 35%);background-color:hsl(225, 21%, 49%)"
        for (let i = 0; i < BtnCalculadora.length; i++) {
            BtnCalculadora[i].style.cssText = cssbtnCal;
        }
        for (let i = 0; i < shadowDelReset.length; i++) {
            shadowDelReset[i].style.cssText = cssShadowDelRes;
        }
        let cssresultado = "box-shadow: 0px 0.4vw 0px 0px hsl(6, 70%, 34%);background-color:hsl(6, 63%, 50%)"
        resultado.style.cssText = cssresultado
        tema = 2
    } else {
        if (tema === 2) {
            pantalla.style.color = "hsl(60, 10%, 19%)"
            padre.style.backgroundColor = "hsl(0, 0%, 90%)"
            operaciones.style.backgroundColor = "hsl(0, 5%, 81%)"
            contenedorBTN.style.backgroundColor = "hsl(0, 5%, 81%)"
            btn1.style.backgroundColor = "hsl(0, 5%, 81%)"
            btn2.style.backgroundColor = "hsl(25, 98%, 40%)"
            btn3.style.backgroundColor = "hsl(0, 5%, 81%)"
            entrada.style.backgroundColor = "hsl(0, 0%, 93%)"
            cabezera.style.color = "hsl(60, 10%, 19%)"
            let cssbtnCal = "box-shadow: 0px 0.4vw 0px 0px hsl(35, 11%, 61%);background-color:hsl(45, 7%, 89%);color:hsl(60, 10%, 19%)"
            let cssShadowDelRes = "box-shadow: 0px 0.4vw 0px 0px  hsl(185, 58%, 25%);background-color:hsl(185, 42%, 37%)"
            for (let i = 0; i < BtnCalculadora.length; i++) {
                BtnCalculadora[i].style.cssText = cssbtnCal;
            }
            for (let i = 0; i < shadowDelReset.length; i++) {
                shadowDelReset[i].style.cssText = cssShadowDelRes;
            }
            let cssresultado = "box-shadow: 0px 0.4vw 0px 0px hsl(25, 99%, 27%);background-color:hsl(25, 98%, 40%)"
            resultado.style.cssText = cssresultado
            tema = 3
        } else {
            if (tema === 3) {
                pantalla.style.color = "hsl(52, 100%, 62%)"
                padre.style.backgroundColor = " hsl(268, 75%, 9%)"
                operaciones.style.backgroundColor = "hsl(268, 71%, 12%)"
                contenedorBTN.style.backgroundColor = "hsl(268, 71%, 12%)"
                btn1.style.backgroundColor = "hsl(268, 71%, 12%)"
                btn2.style.backgroundColor = "hsl(268, 71%, 12%)"
                btn3.style.backgroundColor = "hsl(176, 100%, 44%)"
                entrada.style.backgroundColor = "hsl(268, 71%, 12%)"
                cabezera.style.color = "hsl(52, 100%, 62%)"
                let cssbtnCal = "box-shadow: 0px 0.4vw 0px 0px hsl(290, 70%, 36%);background-color:hsl(268, 47%, 21%);color:hsl(52, 100%, 62%)"
                let cssShadowDelRes = "box-shadow: 0px 0.4vw 0px 0px hsl(285, 91%, 52%);background-color:hsl(281, 89%, 26%)"
                for (let i = 0; i < BtnCalculadora.length; i++) {
                    BtnCalculadora[i].style.cssText = cssbtnCal;
                }
                for (let i = 0; i < shadowDelReset.length; i++) {
                    shadowDelReset[i].style.backgroundColor = "";
                    shadowDelReset[i].style.cssText = cssShadowDelRes;
                }
                let cssresultado = "box-shadow: 0px 0.4vw 0px 0px hsl(177, 92%, 70%);background-color: hsl(176, 100%, 44%);color:hsl(198, 20%, 13%)"
                resultado.style.cssText = cssresultado
                tema = 1;
            }
        }
    }
}
//funciones de efecto touch
let down = (id) => {
    document.getElementById(id).className = 'push btnCal'
}
let up = (id) => {
    document.getElementById(id).className = 'nopush btnCal'
}
//funciones para redimencion de tamaño de los numeros en pantalla


let redimencionPresionarNumero = () => {
    let anchoPantalla = document.getElementById('padre').clientWidth
    let anchoentrada = document.getElementById('pantalla').clientWidth
    let numeros = document.getElementById('numerosP')

    let fontSizeOriginal = parseFloat(window.getComputedStyle(numeros).fontSize)
    if ((numeros.clientWidth * 100) / (anchoPantalla) > (anchoentrada * 100) / (anchoPantalla) - 3) {
        numeros.style.fontSize = ((fontSizeOriginal * 100) / (anchoPantalla) - 1) + 'vw'
    }
}
let redimencionPresionarOperacion = (numIngresado) => {
    let anchoPantalla = document.getElementById('padre').clientWidth
    let anchoentrada = document.getElementById('pantalla').clientWidth
    let numeros = document.getElementById('numerosP')
    console.log(((numIngresado.split("")).length) + ' ' + numerosIngresados)

    switch (((numIngresado.split("")).length)) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            numeros.style.fontSize = '6.2vw'
            break
        case 10:
        case 11:
            numeros.style.fontSize = '5.2vw'
            break
        case 12:
        case 13:
        case 14:
            numeros.style.fontSize = '4.2vw'
            break 
        default:
            numeros.style.fontSize = '3.2vw'
            break 
    } 
}

