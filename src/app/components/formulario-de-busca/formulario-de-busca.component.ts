import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-de-busca',
  imports: [],
  templateUrl: './formulario-de-busca.component.html',
  styleUrl: './formulario-de-busca.component.css'
})
export class FormularioDeBuscaComponent {
  toggleMenu(){
    const formulario = document.getElementById('form') as HTMLElement;
    if (formulario) {
      formulario.classList.toggle('ativo');
    } else {
      console.error('Elemento do menu não encontrado!');
  }
  }
}
