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
        alert("Bases numéricas ingresadas no válidas, rectifique")
        return false;
    } else {
        return true;
    }
}

deCualquierBasea10 = (e) => {

    let input0 = e.toUpperCase().split("").reverse();
    let elem;
    elem = convertLetraANumber(input0, elem)
    resultadoBase10 = input0.map((x,i)=> x *= Math.pow(baseI.value,i)).reduce((acc,sum) => acc + sum);
    return resultadoBase10;
}

de10ACualquierBase = (entrada) => {

    let e = parseInt(entrada)
    let bF = baseF.value;
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

    if (baseI === 10 && verificarBase(input,baseI,baseF)) {
        
        contResult.innerHTML = `<p>El número <span style="color:orangered;">${input}</span><sub>10</sub> es igual a <span style="color:orangered;">${de10ACualquierBase(input)}</span><sub>${baseF}</sub></p>`

    }
    if (baseF === 10 && verificarBase(input,baseI,baseF)) {

        contResult.innerHTML = `<p>El número <span style="color:orangered;">${input}</span><sub>${baseI}</sub> es igual a <span style="color:orangered;">${deCualquierBasea10(input)}</span><sub>10</sub></p>`


    }
    if (verificarBase(input,baseI,baseF) && baseI !== 10 && baseF !== 10){

        let b10 = deCualquierBasea10(input)
        contResult.innerHTML = `<p>El número <span style="color:orangered;">${input}</span><sub>${baseI}</sub> es igual a <span style="color:orangered;">${de10ACualquierBase(b10)}</span><sub>${baseF}</sub></p>`

    }

    document.querySelector("#input").value = "0";
    document.querySelector("#baseI").value = null;
    document.querySelector("#baseF").value = null;

}