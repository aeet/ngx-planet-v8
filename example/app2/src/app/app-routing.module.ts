import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmptyComponent} from 'ngx-planet-v8';
import {DemoComponent} from "./demo/demo.component";


const routes: Routes = [
  {
    path: 'app2',
    children: [
      {
        path: '',
        redirectTo: 'demo',
        pathMatch: 'full'
      },
      {
        path: 'demo',
        component: DemoComponent
      }

    ]
  },
  {
    path: '**',
    component: EmptyComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
