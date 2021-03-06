import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminProfileGuard } from '../core/guards/admin-profile.guard';


const routes: Routes = [
  {
    path:"admin", children:[
    //any admin child routes with components are added here
    {path:"profile", component:AdminProfileComponent, canActivate:[AdminProfileGuard]}
    
  ]
}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
