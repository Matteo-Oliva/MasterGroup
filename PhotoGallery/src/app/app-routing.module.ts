import { FormComponent } from './gallery-form/form/form.component';
import { LoginGuard } from './shared/services/guards/login.guard';
import { LoginComponent } from './features/login/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ListComponent } from './features/gallery/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gallery', component: ListComponent, canActivate:[LoginGuard] },
  { path: 'client', loadChildren: () => import('./features/module/client/client.module').then(m => m.ClientModule) ,canActivate:[LoginGuard] },
  { path: 'orders', loadChildren: () => import('./features/module/orders/orders.module').then(m => m.OrdersModule),canActivate:[LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: FormComponent },
  { path: '**', component: DashboardComponent ,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
