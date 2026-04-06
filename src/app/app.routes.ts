import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('../app/feature/main-content/main-content.component').then((x) => x.MainContentComponent),
  },
  {
    path: 'resume',
    loadComponent: () =>
      import('../app/feature/resume/resume.component').then((x) => x.ResumeComponent),
  },
];
