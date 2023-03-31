class pessoa{
  constructor (pNome, pEndereco){
    this.nome = pNome;
    this.endereco = pEndereco
  }

  get Nome(){return this.nome}
  set Nome(pNome) {this.nome = pNome}

  get Endereco() {return this.endereco}
  set Endereco(pEndereco) {this.endereco = pEndereco}

  Imprimir(){
    return "Nome:" + this.nome + "\nEndereco:" + this.endereco;
  }
}

class fisica extends pessoa{
  constructor(pNome, pEndereco, pCpf, pNascimento){
    super(pNome, pEndereco)
    this.cpf = pCpf;
    this.nascimento = pNascimento;
  }

  get Cpf() {return this.cpf}
  set Cpf(pCpf) {this.cpf = pCpf}

  get Nascimento() {return this.nascimento}
  set Nascimento(pNascimento) {this.nascimento = pNascimento}

  Imprimir(){
    return super.Imprimir() + "\nCpf:" + this.cpf + "\nNascimento:" + this.Nascimento;
  }
}

class juridica extends pessoa{
  constructor(pNome, pEndereco, pCnpj,pRazaosocial){
    super(pNome, pEndereco)
    this.cnpj = pCnpj;
    this.razaosocial = pRazaosocial;
  }

  get Cnpj() {return this.cnpj}
  set Cnpj(pCnpj) {this.cnpj = pCnpj}

  get Razaosocial() {return this.razaosocial}
  set Razaosocial(pRazaosocial) {this.razaosocial = pRazaosocial}

  Imprimir(){
    return super.Imprimir() + "\nCnpj:" + this.cnpj + "\nRazãosocial:" + this.razaosocial;
  }
}

var Maria = new fisica("Maria", "Borboletas Psicodélicas","800.630.254-80", "25/10/1970");
var Claudiney = new juridica("Claudiney", "pato donalds", "25.356.128/0001-80", "Vale LTDA")
console.log(Maria.Imprimir());
console.log(Claudiney.Imprimir());