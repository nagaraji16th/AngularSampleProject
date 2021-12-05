import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './login/auth.guard.ts';
import { LoginComponent } from './login/login.component';

const appRoutes:Routes = [
  {path:'',redirectTo:'login', pathMatch: 'full' },
  {path:'login',component:LoginComponent,pathMatch:'full',},
  {path: 'dashboard', component:DashboardComponent,pathMatch:'full'},
  // {path:'forms', component:FormsComponent,canActivate: [AuthGuard]},
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
