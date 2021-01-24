/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2021-01-22 10:24:11
 * @LastEditTime: 2021-01-22 11:09:12
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /ngx-planet-v8-parent/example/app1/src/app/app-routing.module.ts
 * @LICENSE: Apache-2.0
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponent } from 'ngx-planet-v8';
import {ProjectsComponent} from "./projects/projects.component";


const routes: Routes = [
  {
    path: 'app1',
    children: [
      {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full'
      },
      {
        path: 'projects',
        component: ProjectsComponent
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
