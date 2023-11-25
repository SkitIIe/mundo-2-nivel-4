import { Injectable ,} from '@angular/core';

class editora{
  constructor ( public codEditora: number, public nome: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ControleEditora {
  private editoras: Array<editora> = [
    new editora(1, 'Editora A'),
    new editora(2, 'Editora B'),
    new editora(3, 'Editora C')
  ];

  getEditoras(): Array<editora> {
    return this.editoras;

  }
  
  getNomeEditora(codEditora: number): string {
    const editoraEncontrada = this.editoras.find(editora => editora.codEditora === codEditora);
  
    if (editoraEncontrada) {
      return editoraEncontrada.nome;
    } else {
      return 'Editora não encontrada';
    }
  }}
