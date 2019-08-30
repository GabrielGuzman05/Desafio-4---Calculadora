var operandoa;
var operandob;
var operacion;
var resultadoAuxiliar = 0;
var calculado = false;
//variables
var resultado = document.getElementById('resultado');
var resultado2 = document.getElementById('resultado2');
var c = document.getElementById('c');
var ce = document.getElementById('ce');
var suma = document.getElementById('+');
var resta = document.getElementById('-');
var multiplicacion = document.getElementById('*');
var division = document.getElementById('/');
var igual = document.getElementById('=');
var uno = document.getElementById('1');
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');
var cero = document.getElementById('0');
var retroceso = document.getElementById('backspace');
var negate = document.getElementById('negate');
var punto = document.getElementById('punto');
//Eventos de click
uno.onclick = function (e) {
    if (calculado) {
        resultado.textContent = "1";
        calculado = false;
    } else
        resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function (e) {
    if (calculado) {
        resultado.textContent = "2";
        calculado = false;
    } else
        resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function (e) {
    if (calculado) {
        resultado.textContent = "3";
        calculado = false;
    } else
        resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function (e) {
    if (calculado) {
        resultado.textContent = "4";
        calculado = false;
    } else
        resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function (e) {
    if (calculado) {
        resultado.textContent = "5";
        calculado = false;
    } else
        resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function (e) {
    if (calculado) {
        resultado.textContent = "6";
        calculado = false;
    } else
        resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function (e) {
    if (calculado) {
        resultado.textContent = "7";
        calculado = false;
    } else
        resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function (e) {
    if (calculado) {
        resultado.textContent = "8";
        calculado = false;
    } else
        resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function (e) {
    if (calculado) {
        resultado.textContent = "9";
        calculado = false;
    } else
        resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function (e) {
    if (calculado) {
        resultado.textContent = "0";
        calculado = false;
    } else
        resultado.textContent = resultado.textContent + "0";
}
c.onclick = function (e) {
    resetear();
}
ce.onclick = function (e) {
    resultado.textContent = "";
}
suma.onclick = function (e) {
    if (calculado) {
        operandoa = resultado.textContent;
        calculado = false;
    }
    if (resultado2.textContent.length == 0) {
        operandoa = resultado.textContent;
        operacion = "+";
        resultado2.textContent = operandoa + " " + operacion;
    } else {
        operandoa = resultadoAuxiliar;
        operandob = resultado.textContent;
        resultadoAuxiliar = resolver();
        operandoa = resultado.textContent;
        operacion = "+";
        resultado2.textContent = resultadoAuxiliar + " " + operacion;
    }
    limpiar();
}
resta.onclick = function (e) {
    if (calculado) {
        operandoa = resultado.textContent;
        calculado = false;
    }
    if (resultado2.textContent.length == 0) {
        operandoa = resultado.textContent;
        operacion = "-";
        resultado2.textContent = operandoa + " " + operacion;
        resultadoAuxiliar = operandoa;
    } else {
        operandoa = resultadoAuxiliar;
        operandob = resultado.textContent;
        resultadoAuxiliar = resolver();
        operandoa = resultado.textContent;
        operacion = "-";
        resultado2.textContent = resultadoAuxiliar + " " + operacion;
    }
    limpiar();
}
multiplicacion.onclick = function (e) {
    if (calculado) {
        operandoa = resultado.textContent;
        calculado = false;
    }
    if (resultado2.textContent.length == 0) {
        operandoa = resultado.textContent;
        operacion = "*";
        resultado2.textContent = operandoa + " " + operacion;
        resultadoAuxiliar = operandoa;
    } else {
        operandoa = resultadoAuxiliar;
        operandob = resultado.textContent;
        resultadoAuxiliar = resolver();
        operandoa = resultado.textContent;
        operacion = "*";
        resultado2.textContent = resultadoAuxiliar + " " + operacion;
    }
    limpiar();
}
division.onclick = function (e) {
    if (calculado) {
        operandoa = resultado.textContent;
        calculado = false;
    }
    if (resultado2.textContent.length == 0) {
        operandoa = resultado.textContent;
        operacion = "/";
        resultado2.textContent = operandoa + " " + operacion;
        resultadoAuxiliar = operandoa;
    } else {
        operandoa = resultadoAuxiliar;
        operandob = resultado.textContent;
        resultadoAuxiliar = resolver();
        operandoa = resultado.textContent;
        operacion = "/";
        resultado2.textContent = resultadoAuxiliar + " " + operacion;
    }
    limpiar();
}
igual.onclick = function (e) {
    operandob = resultado.textContent;
    resolver();
    resultado2.textContent = "";
    calculado = true;
}
retroceso.onclick = function (e) {
    if (calculado) {
        resultado.textContent = "";
        calculado = false;
    } else
        if (resultado.textContent.length != 0) {
            resultado.textContent = resultado.textContent.substr(0, resultado.textContent.length - 1);
        }
}
punto.onclick = function (e) {
    if (calculado) {
        resultado.textContent = ".";
        calculado = false;
    } else
        if (resultado.textContent.indexOf('.') == -1) {
            resultado.textContent = resultado.textContent + ".";
        }
}
negate.onclick = function (e) {
    if (resultado.textContent.indexOf('-') != -1) {
        resultado.textContent = resultado.textContent.replace('-', '');
    } else {
        resultado.textContent = "-" + resultado.textContent;
    }
}

document.onkeyup = function (e) {
    var key = e.key;
    switch (key) {
        case 'Backspace':
            if (calculado) {
                resetear();
                calculado = false;
            }
            if (resultado.textContent.length != 0) {
                resultado.textContent = resultado.textContent.substr(0, resultado.textContent.length - 1);
            }
            break;

        case '1':
            if (calculado) {
                resetear();
                calculado = false;
            }
            resultado.textContent = resultado.textContent + "1";
            break;

        case '2':
            if (calculado) {
                resetear();
                resultado.textContent = "2";
                calculado = false;
            } else
                resultado.textContent = resultado.textContent + "2";
            break;

        case '3':
            if (calculado) {
                resetear();
                resultado.textContent = "3";
                calculado = false;
            } else
                resultado.textContent = resultado.textContent + "3";
            break;

        case '4':
            if (calculado) {
                resetear();
                resultado.textContent = "4";
                calculado = false;
            } else
                resultado.textContent = resultado.textContent + "4";
            break;

        case '5':
            if (calculado) {
                resetear();
                resultado.textContent = "5";
                calculado = false;
            } else
                resultado.textContent = resultado.textContent + "5";
            break;

        case '6':
            if (calculado) {
                resetear();
                resultado.textContent = "6";
                calculado = false;
            } else
                resultado.textContent = resultado.textContent + "6";
            break;

        case '7':
            if (calculado) {
                resetear();
                resultado.textContent = "7";
                calculado = false;
            } else
                resultado.textContent = resultado.textContent + "7";
            break;

        case '8':
            if (calculado) {
                resetear();
                resultado.textContent = "8";
                calculado = false;
            } else
                resultado.textContent = resultado.textContent + "8";
            break;

        case '9':
            if (calculado) {
                resetear();
                resultado.textContent = "9";
                calculado = false;
            } else
                resultado.textContent = resultado.textContent + "9";
            break;

        case '0':
            if (calculado) {
                resetear();
                resultado.textContent = "0";
                calculado = false;
            } else
                resultado.textContent = resultado.textContent + "0";
            break;

        case 'c':
            resetear();
            resultado2.textContent = "";
            break;

        case '+':
            if (calculado) {
                operandoa = resultado.textContent;
                calculado = false;
            }
            if (resultado2.textContent.length == 0) {
                operandoa = resultado.textContent;
                operacion = "+";
                resultado2.textContent = operandoa + " " + operacion;

            } else {
                operandoa = resultadoAuxiliar;
                operandob = resultado.textContent;
                resultadoAuxiliar = resolver();
                operandoa = resultado.textContent;
                operacion = "+";
                resultado2.textContent = resultadoAuxiliar + " " + operacion;
            }
            limpiar();
            break;

        case '-':
            if (calculado) {
                operandoa = resultado.textContent;
                calculado = false;
            }
            if (resultado2.textContent.length == 0) {
                operandoa = resultado.textContent;
                operacion = "-";
                resultado2.textContent = operandoa + " " + operacion;
            } else {
                operandoa = resultadoAuxiliar;
                resultadoAuxiliar = resolver();
                operandoa = resultado.textContent;
                operacion = "-";
                resultado2.textContent = resultadoAuxiliar + " " + operacion;
            }
            limpiar();
            break;

        case '*':
            if (calculado) {
                operandoa = resultado.textContent;
                calculado = false;
            }
            if (resultado2.textContent.length == 0) {
                operandoa = resultado.textContent;
                operacion = "*";
                resultado2.textContent = operandoa + " " + operacion;
            } else {
                operandoa = resultadoAuxiliar;
                resultadoAuxiliar = resolver();
                operandoa = resultado.textContent;
                operacion = "*";
                resultado2.textContent = resultadoAuxiliar + " " + operacion;
            }
            limpiar();
            break;

        case '/':
            if (calculado) {
                operandoa = resultado.textContent;
                calculado = false;
            }
            if (resultado2.textContent.length == 0) {
                operandoa = resultado.textContent;
                operacion = "/";
                resultado2.textContent = operandoa + " " + operacion;
            } else {
                operandoa = resultadoAuxiliar;
                resultadoAuxiliar = resolver();
                operandoa = resultado.textContent;
                operacion = "/";
                resultado2.textContent = resultadoAuxiliar + " " + operacion;
            }
            limpiar();
            break;

        case '=':
            operandob = resultado.textContent;
            resolver();
            resultado2.textContent = "";
            calculado = true;
            break;

        case 'Enter':
            operandob = resultado.textContent;
            resolver();
            resultado2.textContent = "";
            calculado = true;
            break;

        case '.':
            if (resultado.textContent.indexOf('.') == -1) {
                resultado.textContent = resultado.textContent + ".";
            }

    }
}
function limpiar() {
    resultado.textContent = "";
}
function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
    resultadoAuxiliar = 0;
}
function resolver() {
    var res = 0;
    if(operandob==''){
        operandob=0;
    }
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
    return res;
}