class Livro{
    codigo : Number;
    codEditora: Number;
    titulo: String;
    resumo: String;
    autores: String[];

    constructor (codigo: Number, codEditora: Number, titulo: String, resumo: String, autores: String[]){
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
    }
}

export class livro {}
export interface livro{
    codigo: number;}