import { Component, Input } from '@angular/core';
import { ImagemComponent } from '../imagem/imagem.component';

@Component({
  selector: 'app-card',
  imports: [ImagemComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() imagemSrc!: string;
  @Input() tituloCard!: string;
  @Input() descricaoCard!: string;
}
