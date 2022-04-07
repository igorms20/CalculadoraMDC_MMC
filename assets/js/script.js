
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

    const result = document.getElementById('resultTextMDC')
    const msg = document.getElementById('noValueMDC')
    if (v1 != "" && v2 != "") {
        result.innerHTML = `O resultado é: ${mdc}`
        msg.innerHTML = ''
    } else {
        msg.innerHTML = 'PREENCHA OS CAMPOS COM VALORES!'
        result.innerHTML = ''
    } 
}

function calcularMMC() {
    const input3 = document.getElementById('input3')
    const input4 = document.getElementById('input4')  

    a = input3.value
    b = input4.value

    if (a == 0 || b == 0) {
        mmc = 0
    }

    else {
        divisor = 2;
        mmc = 1;
        while (a + b != 2) {
            if (a % divisor === 0 || b % divisor === 0) {
                mmc = mmc * divisor;         

                if (a % divisor === 0) {
                a = a / divisor;            
                }

                if (b % divisor === 0) {
                b = b / divisor;    
                }
            } else {
                divisor = divisor + 1;
            }
        }
    }
    
    const result = document.getElementById('resultTextMMC')
    const msg = document.getElementById('noValueMMC')

    if (a != "" && b != "") {
        result.innerHTML = `O resultado é: ${mmc}`
        msg.innerHTML = ''
    } else {
        msg.innerHTML = 'PREENCHA OS CAMPOS COM VALORES!'   
        result.innerHTML = ''   
    }    
    
}