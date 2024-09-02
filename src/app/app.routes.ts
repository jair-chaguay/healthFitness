import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio', // Redirige a la página de inicio por defecto
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'tab1',
        loadComponent: () => import('./tab1/tab1.page').then(m => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () => import('./tab2/tab2.page').then(m => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () => import('./tab3/tab3.page').then(m => m.Tab3Page),
      },
      {
        path: '',
        redirectTo: 'tab1', // Redirige a la primera tab por defecto
        pathMatch: 'full',
      },
    ],
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
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then(m => m.InicioPage)
  },
  {
    path: 'gender',
    loadComponent: () => import('./gender/gender.page').then(m => m.GenderPage)
  },
  {
    path: 'goals',
    loadComponent: () => import('./goals/goals.page').then(m => m.GoalsPage)
  },
  {
    path: 'activity',
    loadComponent: () => import('./activity/activity.page').then(m => m.ActivityPage)
  },
  {
    path: 'obj-weekend',
    loadComponent: () => import('./obj-weekend/obj-weekend.page').then(m => m.ObjWeekendPage)
  },
  {
    path: 'finish-sign',
    loadComponent: () => import('./finish-sign/finish-sign.page').then(m => m.FinishSignPage)
  },
];
