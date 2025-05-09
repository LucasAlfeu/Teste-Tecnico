import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TituloComponent } from '../titulo/titulo.component';
import { ApiNoticiasService } from '../../services/api-noticias.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalhes',
  imports: [TituloComponent],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit{
  idNoticia: string = '';
  noticia: any;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private apiNoticias: ApiNoticiasService) {}
  getItems(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  getItemById(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.idNoticia = this.route.snapshot.paramMap.get('id') || '';
    this.buscaNoticiaPorId(this.idNoticia);
  }

  buscaNoticiaPorId(id: string): void {
    this.apiNoticias.getItemById(id).subscribe({
      next: (data) =>{
        this.noticia = data;
      },      
      error: (err) => {
        this.errorMessage = 'Erro ao carregar os itens';
        console.error(err);
      }
    })
    console.log(this.noticia)
  }
}
