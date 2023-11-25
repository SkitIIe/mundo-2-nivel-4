import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css'

})
export class LivroDadosComponent {
livro: any;
editoras: any;
incluir() {
throw new Error('Method not implemented.');
}
autoresForm: any;

}
