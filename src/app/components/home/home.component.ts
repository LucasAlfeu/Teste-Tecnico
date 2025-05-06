import { Component } from '@angular/core';
import { TituloComponent } from '../titulo/titulo.component';
import { FormularioDeBuscaComponent } from '../formulario-de-busca/formulario-de-busca.component';

@Component({
  selector: 'app-home',
  imports: [TituloComponent, FormularioDeBuscaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
