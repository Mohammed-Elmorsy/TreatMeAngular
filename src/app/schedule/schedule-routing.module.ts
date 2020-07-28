import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleComponent } from './components/schedule.component';


const routes: Routes = [
  {path:"schedule", children:[
    {path:"index", component:ScheduleComponent},



  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
