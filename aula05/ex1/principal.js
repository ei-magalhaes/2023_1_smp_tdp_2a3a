class Livro{
    constructor(pNome){
        this.nome = pNome
    };

    get Nome(){return this.nome}
    set Nome(pNome){this.nome = pNome}
};

var obj_livro1 = new Livro("Maça")
console.log("Nome do Livro" + obj_livro1.nome)