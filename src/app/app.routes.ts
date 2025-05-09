import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastrarNoticiaComponent } from './components/cadastrar-noticia/cadastrar-noticia.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Inicio'},
    { path: 'cadastrarNoticia', component: CadastrarNoticiaComponent, title: 'Cadastrar Noticia'},
    { path: 'detalhes/:id', component: DetalhesComponent, title: 'Detalhes'},
    
];
