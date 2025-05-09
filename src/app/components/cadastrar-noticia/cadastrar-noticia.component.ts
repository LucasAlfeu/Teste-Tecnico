import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { TituloComponent } from '../titulo/titulo.component';
import { FormsModule } from '@angular/forms';
import { ApiNoticiasService } from '../../services/api-noticias.service';

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

  constructor(private api: ApiNoticiasService) { }

  criaNoticia(): void {
    // Validação simples
    if (!this.novaNoticia.title || !this.novaNoticia.body || !this.novaNoticia.image) {
      this.mensagemError = 'Campos vazio, revise';
      return;
    }

    // Inicia o estado de carregamento
    this.estaCarrregando = true;
    this.mensagemError = '';
    this.mensagemSucesso = '';

    // Chama o serviço para criar o item
    this.api.createItem(this.novaNoticia).subscribe({
      next: (createdItem) => {
        // Sucesso na criação
        this.mensagemSucesso = 'Notícia criada com sucesso!';
        this.novaNoticia = {}; // Limpa o formulário
        this.estaCarrregando = false;
        
        // Remove a mensagem de sucesso após 3 segundos
        setTimeout(() => this.mensagemSucesso = '', 3000);
      },
      error: (err) => {
        // Tratamento de erro
        this.mensagemError = 'Erro ao criar item. Por favor, tente novamente.';
        this.estaCarrregando = false;
        console.error('Erro detalhado:', err); // Log para desenvolvimento
      }
    });
  }
}
