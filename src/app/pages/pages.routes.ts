import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ApresentacoesComponent } from './apresentacoes/apresentacoes.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ConquistasComponent } from './conquistas/conquistas.component';
import { ContatoComponent } from './contato/contato.component';
import { DiarioComponent } from './diario/diario.component';

export const PAGES_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'apresentacoes', component: ApresentacoesComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'conquistas', component: ConquistasComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'diario', component: DiarioComponent },
];