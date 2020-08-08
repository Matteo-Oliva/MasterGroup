import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ListComponent } from './features/gallery/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gallery', component: ListComponent },
  { path: 'client', loadChildren: () => import('./features/module/client/client.module').then(m => m.ClientModule) },
  { path: 'orders', loadChildren: () => import('./features/module/orders/orders.module').then(m => m.OrdersModule) },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
