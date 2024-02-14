import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

const routes: Routes = [
  {
    path: '',
    loadComponent: ()=> LandingPageComponent
  },
  {
    path: 'contact',
    loadComponent: ()=>ContactComponent
  },
  {
    path: 'gallery',
    loadComponent:()=> GalleryComponent
  },
  {
    path: 'auth',
    loadChildren:()=>loadRemoteModule('auth', './AuthModule').then((m) => m.AuthModule).catch((error) => {
      console.error('Error loading remote module:', error);
      return import('../../components/not-available/not-available.module').then(m => m.NotAvailableModule); // Componente de fallback en caso de error
    }),
  },
  {
    path: 'sales',
    loadChildren:()=>loadRemoteModule('sales', './SalesModule').then((m) => m.SalesModule).catch((error) => {
      console.error('Error loading remote module:', error);
      return import('../../components/not-available/not-available.module').then(m => m.NotAvailableModule); // Componente de fallback en caso de error
    }),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
