import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SignInComponent } from './sign-in/sign-in.component';

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
    path: 'sign-in',
    loadComponent: ()=> SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
