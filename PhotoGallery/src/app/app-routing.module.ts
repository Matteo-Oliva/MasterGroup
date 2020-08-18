import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './features/gallery/dashboard/dashboard.component';
import { GalleryListComponent } from './features/gallery/gallery-list/gallery-list.component';
import { LoginComponent } from './features/login/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gallery', component: GalleryListComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
