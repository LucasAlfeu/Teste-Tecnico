import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { TituloComponent } from '../titulo/titulo.component';
import { FormsModule } from '@angular/forms';
import { ApiNoticiasService } from '../../services/api-noticias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-noticia',
  imports: [TituloComponent, FormsModule],
  templateUrl: './cadastrar-noticia.component.html',
  styleUrl: './cadastrar-noticia.component.css'
})
export class CadastrarNoticiaComponent {
  novaNoticia: any = {  };
  mensagemError: string = '';
  mensagemSucesso: string = '';
  estaCarrregando: boolean = false; 

  constructor(private api: ApiNoticiasService, private router: Router) { }

  criaNoticia(): void {
    if (!this.novaNoticia.title || !this.novaNoticia.body || !this.novaNoticia.image) {
      this.mensagemError = 'Campos vazio, revise';
      return;
    }

    this.estaCarrregando = true;
    this.mensagemError = '';
    this.mensagemSucesso = '';

    this.api.createItem(this.novaNoticia).subscribe({
      next: (createdItem) => {
        this.mensagemSucesso = 'Notícia criada com sucesso!';
        this.novaNoticia = {};
        this.estaCarrregando = false;
        
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 300);
      },
      error: (err) => {
        this.mensagemError = 'Erro ao criar item. Por favor, tente novamente.';
        this.estaCarrregando = false;
        console.error('Erro detalhado:', err);
      }
    });
  }
}
