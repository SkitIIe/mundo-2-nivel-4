import { NgModule } from '@angular/core/NgModule';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { LivroListaComponent } from '../livro-lista/livro-lista.component';
import { LivroDadosComponent } from '../livro-dados/livro-dados.component';

const routes : Routes =[
  {path: 'lista', component: LivroListaComponent},
  {path: ' dados', component: LivroDadosComponent},
  {path: '', redirectTo: '/lista', pathMatch:'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgModule,

  ]
})
export class AppRoutingModule { }
