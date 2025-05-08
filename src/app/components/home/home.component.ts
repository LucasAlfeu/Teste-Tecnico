import { Component, inject, OnInit } from '@angular/core';
import { TituloComponent } from '../titulo/titulo.component';
import { FormularioDeBuscaComponent } from '../formulario-de-busca/formulario-de-busca.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TituloComponent,
    FormularioDeBuscaComponent,
    CardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
