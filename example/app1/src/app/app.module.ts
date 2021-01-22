/*
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @Date: 2021-01-22 10:24:11
 * @LastEditTime: 2021-01-22 11:09:38
 * @LastEditors: ferried
 * @Description: Basic description
 * @FilePath: /ngx-planet-v8-parent/example/app1/src/app/app.module.ts
 * @LICENSE: Apache-2.0
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPlanetV8Module } from 'ngx-planet-v8';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    NgxPlanetV8Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
