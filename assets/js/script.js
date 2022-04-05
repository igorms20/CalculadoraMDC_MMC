
function calcularMDC() {    
    const input1 = document.getElementById('input1')
    const input2 = document.getElementById('input2')
    v1 = input1.value 
    v2 = input2.value

    if (v1 > v2) {
        a = v1
        b = v2
    } else {
        a = v2
        b = v1
    }

    while (b != 0) {
        resto = a%b
        a = b
        b = resto
    }

    mdc = a

    const result = document.getElementById('resultText')

    result.innerHTML = `O resultado é: ${mdc}`


}