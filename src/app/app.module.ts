import { Injectable } from '@angular/core';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { NgModule } from '@angular/core/NgModule';
import { AppComponent } from './app.component';



const Route = [
  { path: 'rota1', component: LivroDadosComponent  },
  { path: 'rota2', component: LivroListaComponent },
  
];

@NgModule({
  declarations: [
    AppComponent
  ]
})

@Injectable ({
  providedIn: 'root',
})
 export class ControleEditora{}

 export class ControleLivros{}


 Providers: [
  ControleEditora,
  ControleLivros
 ]