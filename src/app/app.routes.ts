import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio', // Redirige a 'inicio' por defecto
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then(m => m.InicioPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then(m => m.SignupPage)
  },
  {
    path: 'gender',
    loadComponent: () => import('./gender/gender.page').then(m => m.GenderPage)
  },
  {
    path: 'old-wei-alt',
    loadComponent: () => import('./old-wei-alt/old-wei-alt.page').then(m => m.OldWeiAltPage)
  },
];
