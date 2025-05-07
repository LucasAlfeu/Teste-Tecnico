import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagem',
  standalone: true,
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {
  @Input() imageSrc!: string;
  @Input() altText!: string;
}
