import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  imports: [],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit {
  idNoticia: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idNoticia = this.route.snapshot.paramMap.get('id') || '';
  }
}
