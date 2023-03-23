class Conta{
    constructor(){
        this.saldo = 0
    }
        get Saldo() {return this.saldo}
        set Saldo(pSaldo) {this.saldo = pSaldo}

        imprimir(){
            return "saldo:" + this.saldo
        }
        
    }

class Corrente extends Conta /*herança*/{
    constructor(pLimite){
        super()
        this.limite = pLimite
 }

 get Limite(){return this.limite}
 set Limite(plimite){return this.limite = plimite}

 imprimir(){

    return super.imprimir() + "\nlimite:" + this.limite
 }
} 

var obj_corrente = new Corrente(300)
console.log(obj_corrente.imprimir())
















