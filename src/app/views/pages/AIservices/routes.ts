import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./AIservices.component').then(m => m.AiservicesComponent),
    data: {
      title: 'AI Services'
    }
  }
  
];
