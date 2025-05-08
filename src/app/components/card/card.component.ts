import { Component, Input, OnInit } from '@angular/core';
import { ImagemComponent } from '../imagem/imagem.component';
import { ApiNoticiasService } from '../../services/api-noticias.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [ImagemComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent  implements OnInit {
  @Input() imagemSrc!: string;
  @Input() tituloCard!: string;
  @Input() descricaoCard!: string;

  news: any[] = [];
  errorMessage: string = '';

  constructor(private apiNoticias: ApiNoticiasService) { }

  ngOnInit(): void {
    this.carregaNoticias();
  }

  carregaNoticias(): void {
    this.apiNoticias.getItems().subscribe({
      next: (data) => {
        this.news = data;
      },
      error: (err) => {
        this.errorMessage = 'Erro ao carregar os itens';
        console.error(err);
      }
    });
  }

}
