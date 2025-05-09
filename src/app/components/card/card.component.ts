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

  private i = 0;
  renderizou: boolean | undefined;

  news: any[] = [];
  errorMessage: string = '';

  constructor(private apiNoticias: ApiNoticiasService) { }

  ngOnInit(): void {
    this.carregaNoticias();
  }

  resumeDescricao(descricao: String): String {
    if (!descricao || descricao.length <= 100) {
      return descricao;
    }
    return descricao.substring(0, 80) + '...'; 
  }

  carregaNoticias(): void {
    this.apiNoticias.getItems().subscribe({
      next: (data) => {
      if (data && Array.isArray(data)) {
        this.news = data.map(item => {
          return {
            ...item,
            body: item.body ? this.resumeDescricao(item.body) : '' 
          };
        });
      } else {
        this.news = []; 
      }
      console.log(this.news);
      this.news = [...this.news].reverse()
    },
    error: (err) => {
      this.errorMessage = 'Erro ao carregar os itens';
      console.error(err);
    }
  });
} 
}