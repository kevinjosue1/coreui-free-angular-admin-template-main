import { Route } from '@angular/router';

export const routes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./chatpage.component').then(m => m.ChatpageComponent),
        data: {
          title: 'AI Services'
        }
      }
];
