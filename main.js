function verificarBase (en, bi, bf) {

    let sa = en.toUpperCase().split("");
    for (let i = 0; i < sa.length; i++) {
        l = sa[i];
        switch (l) {
            case 'A':
                sa[i] = 10;
                break;
            case 'B':
                sa[i] = 11;
                break;
            case 'C':
                sa[i] = 12;
                break;
            case 'D':
                sa[i] = 13;
                break;
            case 'E':
                sa[i] = 14;
                break;
            case 'F':
                sa[i] = 15;
                break;
            default:
                sa[i] = parseInt(sa[i]);
        }
    }
    let a = sa.find(elem => isNaN(elem))
    if (Math.max(...sa) >= bi || (bi < 2 || bf < 2) || (bi > 16 || bf > 16) || Object.is(a,NaN)) {
        alert("Algun dato ingresado no es válido, por favor corregir.")
        return false;
    } else {
        return true;
    }
}

function deCualquierBasea10 (e, bi){
    let base_inicial = parseInt(bi)
    let input0 = e.toUpperCase().split("").reverse();
    let elem;
    convertLetraANumber(input0, elem)
    resultadoBase10 = input0.map((x,i)=> x *= Math.pow(base_inicial,i)).reduce((acc,sum) => acc + sum);
    return resultadoBase10;
}

function de10ACualquierBase (entrada, bf) {

    let e = parseInt(entrada)
    let bF = parseInt(bf);
    let digito;
    let resultArr = [];
    let resultadoBaseX;

    while (e >= 1) {
        digito = Math.floor(e % bF);
        e /= bF;
        convertLetra(digito, resultArr);
    }
    resultadoBaseX = resultArr.join("");
    return resultadoBaseX;
}

function convertLetraANumber(input0, elem) {
    for (let i = 0; i <= input0.length; i++) {
        elem = input0[i];
        switch (elem) {
            case 'A':
                input0[i] = 10;
                break;
            case 'B':
                input0[i] = 11;
                break;
            case 'C':
                input0[i] = 12;
                break;
            case 'D':
                input0[i] = 13;
                break;
            case 'E':
                input0[i] = 14;
                break;
            case 'F':
                input0[i] = 15;
                break;
            default:
                elem = Number(input0[i]);
        }
    }
    return elem;
}

function convertLetra(digito, resultArr) {
    switch (digito) {
        case 10:
            resultArr.unshift("A");
            break;
        case 11:
            resultArr.unshift("B");
            break;
        case 12:
            resultArr.unshift("C");
            break;
        case 13:
            resultArr.unshift("D");
            break;
        case 14:
            resultArr.unshift("E");
            break;
        case 15:
            resultArr.unshift("F");
            break;
        default:
            resultArr.unshift(digito);
    }
}

function convertir() {

    const input = document.querySelector("#input").value;
    const baseI = document.querySelector("#baseI").value;
    const baseF = document.querySelector("#baseF").value;
    const contResult = document.querySelector("#resultado_Cont");

    if (input == 0) {

        return contResult.innerHTML = `<p>El número <span style="color:orangered;">${input}</span><sub>${baseI}</sub> es igual a <span style="color:orangered;">0</span><sub>${baseF}</sub></p>`

    }

    if (baseI === 10 && verificarBase(input,baseI,baseF)) {
        
        contResult.innerHTML = `<p>El número <span style="color:orangered;">${input}</span><sub>10</sub> es igual a <span style="color:orangered;">${de10ACualquierBase(input,baseF)}</span><sub>${baseF}</sub></p>`

    }
    if (baseF === 10 && verificarBase(input,baseI,baseF)) {

        contResult.innerHTML = `<p>El número <span style="color:orangered;">${input}</span><sub>${baseI}</sub> es igual a <span style="color:orangered;">${deCualquierBasea10(input,baseI)}</span><sub>10</sub></p>`


    }
    if (verificarBase(input,baseI,baseF) && baseI !== 10 && baseF !== 10){

        let b10 = deCualquierBasea10(input,baseI)
        contResult.innerHTML = `<p>El número <span style="color:orangered;">${input}</span><sub>${baseI}</sub> es igual a <span style="color:orangered;">${de10ACualquierBase(b10,baseF)}</span><sub>${baseF}</sub></p>`

    }

    document.querySelector("#input").value = "";
    document.querySelector("#baseI").value = null;
    document.querySelector("#baseF").value = null;

}

function calcular() {

    const num1 = document.querySelector("#input_1").value;
    const num2 = document.querySelector("#input_2").value;
    const operacion = document.querySelector("#op").value;
    const base = parseInt(document.querySelector("#base").value);
    const cont_resultado = document.querySelector("#cont_result");

    if (verificarBase(num1, base, 10) && verificarBase(num2, base, 10)/*  && base != 10 */){

        let num1_base10 = deCualquierBasea10(num1,base);
        let num2_base10 = deCualquierBasea10(num2,base);
        let resultado_base10;
        let resultado;

        switch(operacion){
            case "+":
                resultado_base10 = num1_base10 + num2_base10;
                resultado = de10ACualquierBase(resultado_base10,base);
                break;
            case "-":
                resultado_base10 = num1_base10 - num2_base10;
                (num1_base10 < num2_base10)?alert("Por favor que el primer número sea mayor que el segundo"):(resultado_base10 > 0)?resultado = de10ACualquierBase(resultado_base10,base):resultado = 0;
                break;
            case "x":
                resultado_base10 = num1_base10 * num2_base10;
                (resultado_base10 > 0)?resultado = de10ACualquierBase(resultado_base10,base): resultado = 0;
                break;
            case "÷":
                (num2_base10 == 0)?alert("No se puede dividir entre 0"):resultado_base10 = num1_base10 / num2_base10;
                (resultado_base10 > 0)?resultado = de10ACualquierBase(resultado_base10,base): resultado = 0;
                break;
            default:
                alert("Algo ocurrió mal :(");
        }
        cont_resultado.innerHTML = `${resultado}`;
        document.querySelector("#input_1").value = "";
        document.querySelector("#input_2").value = "";
    }
}