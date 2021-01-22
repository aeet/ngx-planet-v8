/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2021-01-22 10:27:38
 * @LastEditTime: 2021-01-22 10:57:48
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /ngx-planet-v8-parent/example/portal/src/app/app-routing.module.ts
 * @LICENSE: Apache-2.0
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponent } from 'ngx-planet-v8';


const routes: Routes = [
  {
    path: 'app1',
    component: EmptyComponent,
    children: [
      {
        path: '**',
        component: EmptyComponent
      }
    ]
  },
  {
    path: 'app2',
    component: EmptyComponent,
    children: [
      {
        path: '**',
        component: EmptyComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
