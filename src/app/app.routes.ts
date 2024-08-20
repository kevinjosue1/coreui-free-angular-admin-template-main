import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'home',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'aiservices',
        loadChildren: () => import('./views/pages/AIservices/routes').then((m) => m.routes)
      },
      {
        path: 'chatpage',
        loadChildren: () => import('./views/pages/chatpage/routes').then((m) => m.routes)
      }
    ]
  },
  
  { path: '**', redirectTo: 'home' }
];
