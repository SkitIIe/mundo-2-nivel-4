// livro-lista.component.ts
import { Component, OnInit } from '@angular/core';
import { editora } from '../editora';
import { livro } from '../livro';
import { ControleEditora } from '../controle.service';
import { ControleLivros } from '../controle-livros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})

export class LivroListaComponent implements OnInit {
getResumo(arg0: any) {
throw new Error('Method not implemented.');
}
  public editoras: Array<editora> = [];
  public livros: Array<livro> = [];
  public autoresForm: string ='';
livro: any;


  constructor(
    private servEditora: ControleEditora,
     private servLivros: ControleLivros,
     private router: Router) {

      this.livro = new livro ();

      this.editoras = this.servEditora.getEditoras();
     }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

    incluir = () =>{

      this.livro.autores = this.autoresForm.split('/n');
      
      this.servLivros.incluir(this.livro);

      this.router.navigateByUrl('[/lista');

  }

  excluir(codigoLivro: number): void {
    this.servLivros.excluir(codigoLivro);
    this.livros = this.servLivros.obterLivros();
  }

  obterNome(codEditora: number): string {
    return this.servEditora.getNomeEditora(codEditora);
  }
}

export class AppComponent {
  title = 'app-livro-lista';
}
