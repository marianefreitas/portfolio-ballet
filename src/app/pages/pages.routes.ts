import { Routes } from '@angular/router';

export const PAGES_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'sobre',
    loadComponent: () =>
      import('./sobre/sobre.component').then(m => m.SobreComponent),
  },
  {
    path: 'apresentacoes',
    loadComponent: () =>
      import('./apresentacoes/apresentacoes.component').then(m => m.ApresentacoesComponent),
  },
  {
    path: 'galeria',
    loadComponent: () =>
      import('./galeria/galeria.component').then(m => m.GaleriaComponent),
  },
  {
    path: 'conquistas',
    loadComponent: () =>
      import('./conquistas/conquistas.component').then(m => m.ConquistasComponent),
  },
  {
    path: 'contato',
    loadComponent: () =>
      import('./contato/contato.component').then(m => m.ContatoComponent),
  },
  {
    path: 'diario',
    loadComponent: () =>
      import('./diario/diario.component').then(m => m.DiarioComponent),
  },
];
