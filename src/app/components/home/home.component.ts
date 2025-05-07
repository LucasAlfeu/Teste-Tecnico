import { Component, inject, OnInit } from '@angular/core';
import { TituloComponent } from '../titulo/titulo.component';
import { FormularioDeBuscaComponent } from '../formulario-de-busca/formulario-de-busca.component';
import { MostraNoticiaService } from '../../services/mostra-noticia.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TituloComponent,
    FormularioDeBuscaComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //private recebeNoticias = inject(MostraNoticiaService);
  // dados: any;

  // constructor(private apiService: MostraNoticiaService ) {};

  // ngOnInit(): void {
  //   this.carregaDados();
  // }

  // carregaDados(): void{
  //   this.apiService.getData().subscribe(
  //     (response) => {
  //       this.dados = response;
  //       console.log(this.dados)
  //     },
  //     (error) => {
  //       console.log('Erro ao carregar dados: ', error);
  //     }
  //   );
  // }
}
