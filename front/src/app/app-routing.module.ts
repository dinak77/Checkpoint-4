import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [

{ path: '', redirectTo:'home', pathMatch: 'full'},
{ path: 'home', component: HomeComponent},
{ path: 'gallery', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
