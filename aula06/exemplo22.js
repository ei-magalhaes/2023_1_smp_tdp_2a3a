class operacoes{
    constructor(){

    }
    somar(valorA, valorB){
        console.log(valorA + valorB)
    }
/*sobrecarga*/
    somar(valorA, valorB, valorC){
        console.log(valorA + valorB + valorC)
    }
}

var objeto = new operacoes()
objeto.somar(10,20,30)