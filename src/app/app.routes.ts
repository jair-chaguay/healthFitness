
import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio', // Redirige a la página 'inicio' cuando la ruta está vacía
    pathMatch: 'full' // Asegura que la redirección ocurra solo cuando toda la ruta esté vacía
  },
  {
    path:'tabs',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'gender',
    loadComponent: () => import('./gender/gender.page').then( m => m.GenderPage)
  },
  {
    path: 'goals',
    loadComponent: () => import('./goals/goals.page').then( m => m.GoalsPage)
  },
  {
    path: 'activity',
    loadComponent: () => import('./activity/activity.page').then( m => m.ActivityPage)
  },
  {
    path: 'obj-weekend',
    loadComponent: () => import('./obj-weekend/obj-weekend.page').then( m => m.ObjWeekendPage)
  },
  {
    path: 'finish-sign',
    loadComponent: () => import('./finish-sign/finish-sign.page').then( m => m.FinishSignPage)
  },



  
];