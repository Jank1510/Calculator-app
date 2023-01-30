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
        pantalla.style.animationName = 'colortxt_3-1'
        padre.style.backgroundColor = "hsl(222, 26%, 31%)"
        padre.style.animationName = 'animationColorsPadre_3-1'
        operaciones.style.backgroundColor = "hsl(223, 31%, 20%)"
        operaciones.style.animationName = 'animationColorsOperaciones_3-1'
        contenedorBTN.style.backgroundColor = "hsl(223, 31%, 20%)"
        btn1.style.backgroundColor = "hsl(6, 63%, 50%)"
        btn1.style.display = 'none'
        setTimeout(() => {
            btn1.style.display = 'block'
        }, 5);
        btn1.style.animationName = 'btnMovimiento_3-1'
        btn2.style.backgroundColor = "hsl(223, 31%, 20%)"
        btn3.style.backgroundColor = "hsl(223, 31%, 20%)"
        entrada.style.backgroundColor = "hsl(224, 36%, 15%)"
        entrada.style.animationName = 'animationColorsOperacionesandENtrada_3-1'
        cabezera.style.color = "white"
        let cssbtnCal = "box-shadow: 0px 0.4vw 0px 0px hsl(28, 16%, 65%);background-color:hsl(30, 25%, 89%);color:hsl(221, 14%, 31%)"
        let cssShadowDelRes = "box-shadow: 0px 0.4vw 0px 0px  hsl(224, 28%, 35%);background-color:hsl(225, 21%, 49%)"
        for (let i = 0; i < BtnCalculadora.length; i++) {
            BtnCalculadora[i].style.cssText = cssbtnCal;
            BtnCalculadora[i].style.animationName = 'btnLigth_3-1'
        }
        for (let i = 0; i < shadowDelReset.length; i++) {
            shadowDelReset[i].style.cssText = cssShadowDelRes;
            shadowDelReset[i].style.animationName = 'btntwo_3-1'
        }
        let cssresultado = "box-shadow: 0px 0.4vw 0px 0px hsl(6, 70%, 34%);background-color:hsl(6, 63%, 50%)"
        resultado.style.cssText = cssresultado
        resultado.style.animationName = 'btnresultado_3-1'
        tema = 2
    } else {
        if (tema === 2) {
            pantalla.style.animationName = 'colortxt_1-2'
            pantalla.style.color = "hsl(60, 10%, 19%)"
            padre.style.backgroundColor = "hsl(0, 0%, 90%)"
            padre.style.animationName = 'animationColorsPadre_1-2'
            operaciones.style.backgroundColor = "hsl(0, 5%, 81%)"
            operaciones.style.animationName = 'animationColorsOperaciones_1-2'
            contenedorBTN.style.backgroundColor = "hsl(0, 5%, 81%)"
            btn1.style.backgroundColor = "hsl(0, 5%, 81%)"
            btn2.style.backgroundColor = "hsl(25, 98%, 40%)"
            btn2.style.display = 'none'
            setTimeout(() => {
                btn2.style.display = 'block'
            }, 5);
            btn2.style.animationName = 'btnMovimiento_1-2_and_2-3'
            btn3.style.backgroundColor = "hsl(0, 5%, 81%)"
            entrada.style.backgroundColor = "hsl(0, 0%, 93%)"
            entrada.style.animationName = 'animationColorsEntrada_1-2'
            cabezera.style.color = "hsl(60, 10%, 19%)"
            let cssbtnCal = "box-shadow: 0px 0.4vw 0px 0px hsl(35, 11%, 61%);background-color:hsl(45, 7%, 89%);color:hsl(60, 10%, 19%)"
            let cssShadowDelRes = "box-shadow: 0px 0.4vw 0px 0px  hsl(185, 58%, 25%);background-color:hsl(185, 42%, 37%)"
            for (let i = 0; i < BtnCalculadora.length; i++) {
                BtnCalculadora[i].style.cssText = cssbtnCal;
                BtnCalculadora[i].style.animationName = 'btnLigth_1-2'
            }
            for (let i = 0; i < shadowDelReset.length; i++) {
                shadowDelReset[i].style.cssText = cssShadowDelRes;
                shadowDelReset[i].style.animationName = 'btntwo_1-2'
            }
            let cssresultado = "box-shadow: 0px 0.4vw 0px 0px hsl(25, 99%, 27%);background-color:hsl(25, 98%, 40%)"
            resultado.style.cssText = cssresultado
            resultado.style.animationName = 'btnresultado_1-2'
            tema = 3
        } else {
            if (tema === 3) {
                pantalla.style.color = "hsl(52, 100%, 62%)"
                pantalla.style.animationName = 'colortxt_2-3'
                padre.style.backgroundColor = " hsl(268, 75%, 9%)"
                padre.style.animationName = 'animationColorsPadre_2-3'
                operaciones.style.backgroundColor = "hsl(268, 71%, 12%)"
                operaciones.style.animationName = 'animationColorsOperaciones_2-3'
                contenedorBTN.style.backgroundColor = "hsl(268, 71%, 12%)"
                btn1.style.backgroundColor = "hsl(268, 71%, 12%)"
                btn2.style.backgroundColor = "hsl(268, 71%, 12%)"
                btn3.style.backgroundColor = "hsl(176, 100%, 44%)"
                btn3.style.display = 'none'
                setTimeout(() => {
                    btn3.style.display = 'block'
                }, 5);
                btn3.style.animationName = 'btnMovimiento_1-2_and_2-3'
                entrada.style.backgroundColor = "hsl(268, 71%, 12%)"
                entrada.style.animationName = 'animationColorsEntrada_2-3'
                cabezera.style.color = "hsl(52, 100%, 62%)"
                let cssbtnCal = "box-shadow: 0px 0.4vw 0px 0px hsl(290, 70%, 36%);background-color:hsl(268, 47%, 21%);color:hsl(52, 100%, 62%)"
                let cssShadowDelRes = "box-shadow: 0px 0.4vw 0px 0px hsl(285, 91%, 52%);background-color:hsl(281, 89%, 26%)"
                for (let i = 0; i < BtnCalculadora.length; i++) {
                    BtnCalculadora[i].style.cssText = cssbtnCal;
                    BtnCalculadora[i].style.animationName = 'btnLigth_2-3'
                }
                for (let i = 0; i < shadowDelReset.length; i++) {
                    shadowDelReset[i].style.backgroundColor = "";
                    shadowDelReset[i].style.cssText = cssShadowDelRes;
                    shadowDelReset[i].style.animationName = 'btntwo_2-3'
                }
                let cssresultado = "box-shadow: 0px 0.4vw 0px 0px hsl(177, 92%, 70%);background-color: hsl(176, 100%, 44%);color:hsl(198, 20%, 13%)"
                resultado.style.cssText = cssresultado
                resultado.style.animationName = 'btnresultado_2-3'
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
let isbignumber = false
let redimencionnumeros = (numIngresado) => {
    let anchoDispositivo = document.getElementById("padre").clientWidth
    let numeros = document.getElementById('numerosP')
    if (anchoDispositivo >= 770) {//se condiciona para verificar si la pantalla es de desktop ya q los fontsize varian
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
                numeros.style.fontSize = '5.7vw'

            case 11:
                numeros.style.fontSize = '5.3vw'
                break
            case 12:
                numeros.style.fontSize = '4.8vw'

            case 13:
                numeros.style.fontSize = '4.4vw'

            case 14:
                numeros.style.fontSize = '3.9vw'
                break
            case 15:
                numeros.style.fontSize = '3.5vw'
                break
            default:
                isbignumber = true
                break
        }
    } else {
        if (anchoDispositivo < 770) {//se condiciona para verificar si la pantalla es de mobiles
            switch (((numIngresado.split("")).length)) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    numeros.style.fontSize = '20.5vw'
                    break
                case 7:
                    numeros.style.fontSize = '18.5vw'
                    break
                case 8:
                    numeros.style.fontSize = '15.5vw'
                    break
                case 9:
                    numeros.style.fontSize = '13.5vw'
                    break
                case 10:
                    numeros.style.fontSize = '12.7vw'

                case 11:
                    numeros.style.fontSize = '11.7vw'
                    break
                case 12:
                    numeros.style.fontSize = '11.5vw'

                case 13:
                    numeros.style.fontSize = '9.9vw'

                case 14:
                    numeros.style.fontSize = '8.9vw'
                    break
                case 15:
                    numeros.style.fontSize = '8.5vw'
                    break
                default:
                    isbignumber = true
                    break
            }
        }
    }
}

