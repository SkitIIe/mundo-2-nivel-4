import { Injectable } from '@angular/core';
class Livro {
  constructor(public codigo: number, public titulo: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivros {
  private livros: Array<Livro> = [
    new Livro(1, 'Livro A'),
    new Livro(2, 'Livro B'),
    new Livro(3, 'Livro C')
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(novoLivro: Livro): void {
    const maiorCodigo = Math.max(...this.livros.map(livro => livro.codigo));

    // Incrementar o código do novo livro
    novoLivro.codigo = maiorCodigo + 1;

    // Adicionar o novo livro ao vetor
    this.livros.push(novoLivro);
  }

  excluir(codigoLivro: number): void {
    // Encontrar o índice do livro com o código fornecido
    const indiceLivro = this.livros.findIndex(livro => livro.codigo === codigoLivro);

    // Remover o livro usando splice se encontrado
    if (indiceLivro !== -1) {
      this.livros.splice(indiceLivro, 1);
    }
  }
}
